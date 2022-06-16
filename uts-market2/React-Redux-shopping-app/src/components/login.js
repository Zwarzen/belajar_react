import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-form">
            <form>
                <div className="input-container">
                    <label><h1>Log In!</h1></label>
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                </div>
                <div className="button-container">
                <Link to="/herobanner"><h3>Login</h3></Link>
                </div>
                <div className="button-container"><a><Link to="/signup"><h3>Register</h3></Link></a></div> 

            </form>
        </div>
    );
}
export default Login;