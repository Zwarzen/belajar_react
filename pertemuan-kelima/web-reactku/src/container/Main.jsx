import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import Data from "../component/Data";
import Contact from "../component/Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Tokek - Toko Bokek</h1>
          <ul className="header">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/data">Data Barang</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/data" component={ Data } />
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;