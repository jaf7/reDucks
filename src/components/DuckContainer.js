import React, { Component } from 'react';
import mattsduck from '../mattsduck.png';
import morphintime from '../morphintime.png';
import niceduck from '../niceduck.png';
import DuckList from './DuckList.js';

class DuckContainer extends Component {
  state = {
    ducks: {
      one: { id: 'one', name: 'Masterpiece  ', age: 1, image: mattsduck, votes: 0, isCutie: false },
      two: { id: 'two', name: 'Garrette', age: 2, image: morphintime, votes: 0, isCutie: true },
      three: { id: 'three', name: 'nice lil plump boi who would make for delicious dinner', age: 3, image: niceduck, votes: 0, isCutie: false }
    }
  }

  upVote = duckId => {
    this.setState({
      ducks: {
        ...this.state.ducks,
        [duckId]: {
          ...this.state.ducks[duckId],
          votes: this.state.ducks[duckId].votes + 1
        }
      }
    })
  }

  downVote = duckId => {
    this.setState({
      ducks: {
        ...this.state.ducks,
        [duckId]: {
          ...this.state.ducks[duckId],
          votes: this.state.ducks[duckId].votes - 1
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>re DUCKS</h1>
        <DuckList ducks={this.state.ducks} upVote={this.upVote} downVote={this.downVote} />
      </div>
    )
  }
}

export default DuckContainer;
