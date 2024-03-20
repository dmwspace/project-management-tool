import React from 'react';
import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
import userService from './utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProject from './components/CreateProject/CreateProject';


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

  // if (!user) {
  //   return (
  //     <Routes>
  //       <Route
  //         path="/login"
  //         element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
  //       />
  //       <Route
  //         path="/signup"
  //         element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
  //       />
  //       <Route path="*" element={<Navigate to="/login" />} />
  //     </Routes>
  //   );
  // }

  return (
    <Routes>
      <Route path="/" element={<MainPage handleLogout={logout} user={user} />}> 
        <Route path="/create" element={<CreateProject />} />
      </Route>
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      
    </Routes>
  );
}

export default App;
