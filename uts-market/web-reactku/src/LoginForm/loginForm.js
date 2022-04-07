import React from "react";
import './loginForm.css';

const Loginform = () => {
    return (
        <div className="container">
            <div className="form-login">
                <h1>Let's Log in!</h1>
                <form action="" method="POST">
                    Username<input type="text" placeholder="Masukkan username anda"></input>
                    Password<input type="password" placeholder="Masukkan password anda"></input>
                    <button className="login">Login</button>
                </form>
                <input type="checkbox"></input>Remember Me<br/>
            </div>
        </div>
    )
}

export default Loginform;