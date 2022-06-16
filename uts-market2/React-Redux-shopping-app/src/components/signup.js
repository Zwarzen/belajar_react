import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';


const SignUp = () => {
    
    return (
            <div>
                <div className="login-form">
                    <form>
                        <div className="input-container">
                            <label><h1>Register!</h1></label>
                        </div>
                        <div className="input-container">
                            <label>Email </label>
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="button-container">
                        <a><Link to="/herobanner"><h3>Register</h3></Link></a>
                        </div>
                        <div className="button-container"><a><Link to="/"><h3>Log In</h3></Link></a></div>
                    </form>
                </div>

            </div>
            
    );
};

export default SignUp;