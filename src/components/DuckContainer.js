import React, { Component } from 'react';
// import mattsduck from '../mattsduck.png';
// import morphintime from '../morphintime.png';
// import niceduck from '../niceduck.png';
// import dd from '../dd.jpg';
import DuckList from './DuckList.js';
import { Header, Segment } from 'semantic-ui-react';

class DuckContainer extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Header as='h1' attached='top' inverted color='grey'>
            re DUCKS
          </Header>
        </Segment>
        <br/>
        <DuckList />
      </div>
    )
  }
}

export default DuckContainer;
