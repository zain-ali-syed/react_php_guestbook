import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0,
    }

    counterClick = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <button type="button" data-testid="counter-button" onClick={this.counterClick}>{count}</button>
        </div>
      );
    }
}

export default Counter;
