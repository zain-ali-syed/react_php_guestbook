import React, { Component } from 'react';
import Messages from './components/Messages';
import Logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="center-align">
          <img src={Logo} alt="logo" />
        </div>
        <Messages />
      </div>
    );
  }
}

export default App;
