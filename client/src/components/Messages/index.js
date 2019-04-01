import React, { Component } from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import AddMessage from './AddMessage';

const apiURL =
  'http://flashmatics.co.uk/reactplayground/projects/react_php_guestbook/api/index.php';

class Messages extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    axios
      .get(apiURL)
      .then(({ data }) => {
        this.setState(() => ({ messages: data }));
      })
      .catch(error => console.log(error));
  };

  addMessage = ({ name, email, message }) => {
    axios
      .post(apiURL, {
        name,
        email,
        message
      })
      .then(this.fetchMessages)
      .catch(error => console.log('the error ', error));
  };

  render() {
    const { messages } = this.state;
    return (
      <>
        <AddMessage addMessage={this.addMessage} />
        <MessageList messages={messages} />
      </>
    );
  }
}

export default Messages;
