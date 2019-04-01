import React, { Component } from 'react';
import MovieForm from './MovieForm';

class NewMovie extends Component {
  submitForm = () => {
    console.log('In real submitForm function');
  }

  render() {
    return (
      <div>
        <h3 data-testid="title">New Movie</h3>
        <MovieForm onSubmit={this.submitForm} />
      </div>
    );
  }
}

export default NewMovie;
