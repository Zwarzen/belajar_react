import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Dashboard from "../component/Dashboard";
//import Data from "../component/Data";
import List from "../component/List"
import Contact from "../component/Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Tokek - Toko Bokek</h1>
          <ul className="header">
            <li><NavLink to="/">Dashboard</NavLink></li>
            {/* <li><NavLink to="/list">Barang Lainnya</NavLink></li> */}
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/account">Account</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Dashboard}/>
            {/* <Route path="/list" component={ List } /> */}
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;