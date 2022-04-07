import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from "./Main";
import reportWebVitals from './reportWebVitals';
import "./style.css";
import ListPost from "./ListProduk/ListPost"

ReactDOM.render(
//<Main/>
  <ListPost/>, 
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
