import { useState } from 'react'
import axios from 'axios'
import {authURL} from '../constant.js'

function Login({ onLoginSuccess, switchToSignup }) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        const signinData = {email:loginEmail,password:loginPassword}
        try {
            const response = await axios.post(`${authURL}/signin`, 
                signinData,
                { withCredentials: true }
            );
            onLoginSuccess(response.data.user); 
        } catch (err) {
            setError(err.response?.data?.err || "Login failed");
        }
    }

    return (
        <div className="form">
            <h2>SignIn</h2>
            {error && <p className="error-text">{error}</p>}
            <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <button onClick={handleSignIn}>SignIn</button>
            <button type="button" className="switch-form" onClick={switchToSignup}>
                Don't have an account?
            </button>
        </div>
    )
}

export default Login