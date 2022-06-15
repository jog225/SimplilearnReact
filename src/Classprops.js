import React, { Component } from 'react';

class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from {this.props.place}! Get ready to Learn React with Simplilearn</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Classprops;