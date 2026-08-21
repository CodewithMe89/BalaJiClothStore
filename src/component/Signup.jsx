import { useState } from 'react'
import axios from 'axios'
import {authURL} from '../constant.js'

function Signup({ onSignupSuccess, switchToLogin }) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    
    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const signupData = {firstName,lastName,email,password,gender};
        try {
            const response = await axios.post(`${authURL}/signup`,
                signupData,
                { withCredentials: true }
            );
            onSignupSuccess(response.data.newUser);
        } catch (err) {
            setError(err.response?.data?.err || "Signup failed");
        }
    }

    return (
        <div className="form">
            <h2>SignUp</h2>
            {error && <p className="error-text">{error}</p>}
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="gender">
                <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />Male
                <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female
                <input type="radio" name="gender" value="others" onChange={(e) => setGender(e.target.value)} />Others
            </div>
            <button onClick={handleSignUpSubmit}>SignUp</button>
            <button type="button" className="switch-form" onClick={switchToLogin}>
                Already have an account?
            </button>
        </div>
    )
}

export default Signup