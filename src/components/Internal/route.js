import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import UseToken from '../dashboards/login/useToken';

import  UserDashboard  from '../dashboards/userDashboard/userDashboard';
import LoginDashboard from '../dashboards/login/LoginDashboard';

export default function RouteSpecification() {

    let [counter] = useState(0);


    const { token, setToken } = UseToken()


    const handleIdle = () => {
        if (token) counter = counter + 1
        if (counter >= 60000) { // 10 minutes in seconds
            localStorage.clear(); // Clear local storage
            sessionStorage.clear(); // Clear session storage
            counter = 0
            return clearInterval()
        }
    };


    const firstRenderRef = useRef(false);

    useEffect(() => {

        if (firstRenderRef.current) {
            const resetIdleTimer = () => {
                counter = 0
            };

            if (token) setInterval(handleIdle, 2000);
            document.addEventListener('mousemove', resetIdleTimer);
            document.addEventListener('keypress', resetIdleTimer);
            return () => clearInterval()
        } else {
            firstRenderRef.current = true;
        }


    }, []);

    if (!token) {
        return <div>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Navigate to='/login' />} />
                    <Route path='/login' element={<LoginDashboard setToken={setToken} />} />
                </Routes>
            </BrowserRouter>
        </div>
    }

    counter = counter + 1
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/userdashboard' />} />
                    <Route path='/login' element={<LoginDashboard setToken={setToken} />} />
                    <Route path='/userdashboard' element={<UserDashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}