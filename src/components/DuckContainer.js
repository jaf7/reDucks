import React, { Component } from 'react';
import DuckList from './DuckList.js';
import { Header, Segment } from 'semantic-ui-react';
import { fetchFoxes } from '../actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoxCard from './FoxCard.js'

class DuckContainer extends Component {
  componentDidMount() {
    this.props.getFoxy()
  }

  render() {
    console.log("props are", this.props);
    return (
      <div>
        <Segment>
          <Header as='h1' attached='top' inverted color='grey'>
            re DUCKS
          </Header>
        </Segment>
        <br/>
        <DuckList />
        {this.props.foxes.loading === true ? <FoxCard /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foxes: state.foxes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoxy: bindActionCreators(fetchFoxes, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer);
