import React, { Component } from 'react';
import Isemail from 'isemail';
import './AddMessage.css';

class AddMessage extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    errors: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.formIsValid()) {
      this.props.addMessage(this.state);
      this.setState({ name: '', email: '', message: '', errors: [] });
    }
  };

  formIsValid = () => {
    const { name, email, message } = this.state;
    const errors = [];
    if (!name) errors.push('Please enter your name');
    if (!Isemail.validate(email)) errors.push('Please enter a valid email');
    if (message.length < 10)
      errors.push('Please enter a message of at least 10 characters');
    if (errors.length) this.setState(() => ({ errors }));
    return !errors.length;
  };

  displayErrorMessages = () => {
    const { errors } = this.state;
    return errors.map(error => <div>{error}</div>);
  };

  render() {
    return (
      <div className="form-style-10">
        <h1>Leave a message below</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inner-wrap">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <label htmlFor="email">
              Email Address
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </label>
            <label htmlFor="message">
              Message{' '}
              <textarea
                id="message"
                onChange={this.handleChange}
                value={this.state.message}
              />
            </label>
          </div>

          {this.state.errors.length > 0 && (
            <div className="error">{this.displayErrorMessages()}</div>
          )}

          <div className="button-section">
            <input type="submit" value="Leave Message" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessage;
