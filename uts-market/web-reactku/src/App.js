import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";

import Navigation from "./components/navigation/Navigation";
import HomeContainer from "./components/home-container/Home-container";
import Profiles from './components/profile/Profiles';
import loginForm from './LoginForm/loginForm'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/category/:id" component={Category} />
          <Route path="/profile/:id" component={Profiles} />
          <Route path="/login/:id" component={loginForm}/>
      </div>
    );
  }
}

export default App;
