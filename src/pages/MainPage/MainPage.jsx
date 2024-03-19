import React from 'react';
import Header from '../../components/Header/Header'

export default function MainPage({ user, handleLogout }) {
    return (
        <Header user={user}/>
    )
    
}