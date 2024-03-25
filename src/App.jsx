import React from 'react';
import { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
import userService from './utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProject from './components/CreateProject/CreateProject';
import Layout from './pages/Layout/Layout';
import tokenService from './utils/tokenService';
import Board from './components/Board/Board';

function App() {

 
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin() {
    setUser(userService.getUser())
  }

  function logout() {
    console.log("happening")
    userService.logout();
    setUser(null);
  }
  

  //console.log('this is state: ', projects)
  if (!user) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout handleLogout={logout} user={user}/>}>
        <Route index element={<h1></h1>}></Route>
        <Route path="create" element={<CreateProject />} />
        <Route path="login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/:projectId" element={<Board />} />
      </Route>


    </Routes>
  );
}

export default App;
