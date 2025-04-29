import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
    // return fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())
    return {
        username: "Karthik A K",
        password: "KAR123",
        token : '123'
    }
}

export default function LoginDashboard({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    // function handleClick() {
    //     localStorage.clear(); // Clear local storage
    //     sessionStorage.clear();
    //     console.log(">>>>>>>>handleClickhandleClick")
    //     navigate("/login");
    // }
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(">>>>>>>>>>>>>>Token",token)
        setToken(token);
        navigate("/userdashboard");
    }

    return (
        <div className='login'>
            <h2>Login In </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text"
                     onChange={e => setUserName(e.target.value)}
                      />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"
                     onChange={e => setPassword(e.target.value)} 
                     />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

LoginDashboard.propTypes = {
    setToken: PropTypes.func.isRequired
};