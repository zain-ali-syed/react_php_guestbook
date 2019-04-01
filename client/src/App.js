import React, { Component } from 'react';
import Messages from './components/Messages';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title"> React-PHP-mySQL guestbook </h3>
        <Messages />
      </div>
    );
  }
}

export default App;
