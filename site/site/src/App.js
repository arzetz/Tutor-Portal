import React from 'react';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Findtutor from './pages/Findtutor';
import Findstudent from './pages/Findstudent';
import Profile from './pages/profile';
import Login from './pages/login';
import Registration from './pages/registration';
import Reviews from './pages/Reviews';
import Edit from './pages/edit';
import History from './pages/history';
import CreateTask from './pages/createtask';
import CreateResume from './pages/createresume';
import Applications from './pages/applications';
import SingleAppl from './pages/application';

import Footer from './components/Footer';

function App() {
    return (
        <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} /> /*Бэк не нужен*/
                
                <Route path="/findtutor" element={<Findtutor />} />
                <Route path="/findstudent" element={<Findstudent />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/history" element={<History />} />
                <Route path="/createtask" element={<CreateTask />} />
                <Route path="/createresume" element={<CreateResume />} />
                <Route path="/application/:id" element={<SingleAppl />} />
                <Route path="/applications" element={<Applications />} />
            </Routes>
            <Footer />
        </Router>
        </>
    );
};


export default App;