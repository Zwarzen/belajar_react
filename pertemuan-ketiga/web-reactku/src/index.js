import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './component/HelloComponent';
import Login from './login/login'
import Lifecycle from './LifeCycle' 
//import * as serviceWorker from './serviceWorker'

/*const HelloComponent ()=> {
    return HelloComponent;
}

Class.StateFullComponent extends React.Component{
    render(){
        return<p>StateFullComponent</p>
    }
}

ReactDOM.render(<StateFullComponent />, document.getElementById('root'));*/

ReactDOM.render(
    <Lifecycle />,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregistered();