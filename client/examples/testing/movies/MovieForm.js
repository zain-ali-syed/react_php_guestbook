import React, { Component } from 'react';

class MovieForm extends Component {
  state = {
    title: '',
  }


  render() {
    const { submitForm } = this.props;
    const { title } = this.state;

    return (
      <div>
        <form data-testid="form-new-movie" onSubmit={() => { submitForm({ title }); }}>
          <label htmlFor="title">
          Title
            <input type="text" id="title" name="title" onChange={e => this.setState({ title: e.target.value })} />
          </label>
          <button type="submit" data-testid="submit_new_movie">Add Movie</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
