import React from 'react';
import ReactDOM from 'react-dom';

class StateFullComponent extends React.Component {
    render(){
      return <p>StateFullComponent</p>
    }
  }
ReactDOM.render(<StateFullComponent />, document.getElementById('root'));