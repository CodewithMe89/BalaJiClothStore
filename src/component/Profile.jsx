import { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './Login'
import Signup from './Signup'
import Toast from './Toast'
import '../Css/LoginSignupForm.css'
import { authURL } from '../constant.js'

function Profile() {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [toast, setToast] = useState({ message: "", type: "success" });

    const [editData, setEditData] = useState({
        firstName: "", lastName: "", email: "", password: "", gender: ""
    })
    const [error, setError] = useState("")

    // reusable toast trigger — auto clears after 3 seconds
    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: "", type: "success" }), 3000);
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${authURL}/profile`, {
                    withCredentials: true
                });
                setUser(response.data.profile);
            } catch (err) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        checkAuth();
    }, [])

    const startEditing = () => {
        setEditData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: "",
            gender: user.gender
        })
        setIsEditing(true)
    }

    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${authURL}/profile`, editData, {
                withCredentials: true
            });
            setUser(response.data.updatedProfile);
            setIsEditing(false);
            setError("");
            showToast("Profile updated successfully!");
        } catch (err) {
            setError(err.response?.data?.err || "Update failed");
            showToast(err.response?.data?.err || "Update failed", "error");
        }
    }

    const handleLogout = async () => {
        try {
            await axios.post(`${authURL}/logout`, {}, { withCredentials: true });
            setUser(null);
            showToast("Logged out successfully!");
        } catch (err) {
            showToast("Logout failed", "error");
        }
    }

    // ye do functions Login/Signup ko pass karenge - user set + toast dono ek saath
    const handleLoginSuccess = (userData) => {
        setUser(userData);
        showToast("Logged in successfully!");
    }

    const handleSignupSuccess = (userData) => {
        setUser(userData);
        showToast("Account created successfully!");
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="container">
            <Toast message={toast.message} type={toast.type} />
            {user ? (
                <div className="user-data">
                    {!isEditing ? (
                        <>
                            <div className="profile-avatar">
                                {user.firstName?.[0]}{user.lastName?.[0]}
                            </div>
                            <h2>Welcome, {user.firstName} {user.lastName}</h2>
                            <p data-label="Email">{user.email}</p>
                            <p data-label="Gender">{user.gender}</p>
                            <button onClick={startEditing}>Edit Profile</button>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <form className="form" onSubmit={handleUpdate}>
                            <h2>Edit Profile</h2>
                            {error && <p className="error-text">{error}</p>}
                            <input type="text" name="firstName" placeholder="First Name" value={editData.firstName} onChange={handleEditChange} />
                            <input type="text" name="lastName" placeholder="Last Name" value={editData.lastName} onChange={handleEditChange} />
                            <input type="email" name="email" placeholder="Email" value={editData.email} onChange={handleEditChange} />
                            <input type="password" name="password" placeholder="New Password (optional)" value={editData.password} onChange={handleEditChange} />
                            <div className="gender">
                                <label>
                                    <input type="radio" name="gender" value="male" checked={editData.gender === "male"} onChange={handleEditChange} /> Male
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="female" checked={editData.gender === "female"} onChange={handleEditChange} /> Female
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="others" checked={editData.gender === "others"} onChange={handleEditChange} /> Others
                                </label>
                            </div>
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </form>
                    )}
                </div>
            ) : (
                <div className="form-container">
                    <div className="form-toggle">
                        <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>SignIn</button>
                        <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                    </div>
                    {isLogin ? (
                        <Login onLoginSuccess={handleLoginSuccess} switchToSignup={() => setIsLogin(false)} />
                    ) : (
                        <Signup onSignupSuccess={handleSignupSuccess} switchToLogin={() => setIsLogin(true)} />
                    )}
                </div>
            )}
        </div>
    )
}

export default Profile