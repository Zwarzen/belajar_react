import React, { Component } from "react";
import Loginform from "./LoginForm/loginForm";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>Welcome to Neo Shop, please do Log in to continue to see our Product! </p>
        <Loginform />
      </div>
    );
    <Loginform />
  }
}
 
export default Home;