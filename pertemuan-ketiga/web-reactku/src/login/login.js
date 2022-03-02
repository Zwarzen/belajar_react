import React, { Component } from "react";
import './login.css'

class Login extends Component {
    render() {
        return (
            <div class="container">
                
                <h2>Form Login</h2>
                
                <div class="form-login">
                    
                    <h2>Tugas Pertemuan Ketiga</h2>
                    
                    <form action="">
                        
                        <div class="form-inline">
                            <label id="Username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Masukan Username" />
                        </div>
                        
                        <div class="form-inline">
                            <label id="Password">Password</label>
                            <input type="text" name="password" id="password" placeholder="Masukan Password" />
                        </div>

                        <input type="submit" className="submit" value="Login" />

                        <div class="form-inline">
                            <input type="checkbox" name="Remember Me" id="remember-me" checked />
                            <label htmlFor="Remember Me">Remember Me</label>
                        </div>
                        
                        <button class="button-cancel">Cancel</button>
                    
                    </form>
                
                </div>
            </div>
        )
    }
}

export default Login;