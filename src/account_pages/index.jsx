import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

const PagesSetup = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login/" element={<Login />} />
                <Route exact path="/"element={<Profile />} />
            </Routes>
        </Router>
      )
}

export default PagesSetup