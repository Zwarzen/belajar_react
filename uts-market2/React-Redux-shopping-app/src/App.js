import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Profiles from "./components/profile/Profiles";

import Navigation from "./components/navigation/Navigation";
import HomeContainer from "./components/home-container/Home-container";
import ShopList from "./components/shop-list/ShopList";
import LogIn from './components/login';
import HeroBanner from './components/hero-banner/Hero-banner';
import SignUp from './components/signup';


class App extends Component {
  render() {
    return (
      <div className="App">
          
          <Navigation />
          <Route exact path="/" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/herobanner" component={HeroBanner} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/shoplist" component={ShopList} />
          <Route path="/profiles" component={Profiles} />
      </div>
    );
  }
}

export default App;
