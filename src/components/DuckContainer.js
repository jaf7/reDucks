import React, { Component } from 'react';
import DuckList from './DuckList.js';
import FoxCard from './FoxCard.js';
import { Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFoxes } from '../actions.js';

class DuckContainer extends Component {
  componentDidMount() {
    this.props.getFoxy();
  }

  render() {
    console.log("foxes", this.props.foxes);
    return (
      <div>
        <Segment>
          <Header as='h1' attached='top' inverted color='grey'>
            re DUCKS
          </Header>
        </Segment>
        <br/>
        <DuckList />
        { this.props.foxes.loading === true ? <FoxCard /> : null }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoxy: bindActionCreators(fetchFoxes, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    foxes: state.foxes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer);
