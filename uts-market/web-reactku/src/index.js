import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//import Main from "./Main";
import reportWebVitals from './reportWebVitals';
//import ListPost from "./ListProduk/ListPost"
import 'babel-polyfill';
import App from './components/App';
import Root from './Root';
import './style.scss';

ReactDOM.render(<Root><App /></Root>, document.getElementById('content'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
