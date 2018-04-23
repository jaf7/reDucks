// actions.js

export function fetchFoxes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FOXES' });
    return fetch(URL)
      .then(response => response.json())
      .then(json => dispatch({ type: 'ADD_FOXES', payload: json }));
  }
}

// reducer.js

defaultState = {
  ...defaultState,
  foxes: {
    loading: false,
    picture: {}
  }
}
case 'LOADING_FOXES':
  return {...state,
    foxes: {
      loading: {
        ...!state.foxes.loading
      }
    }
  }
case 'ADD_FOXES':
  return {...state,
    foxes: {
      loading: true,
      picture: action.payload
    }
  }

// index.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

// DuckContainer.js

import FoxCard from './FoxCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFoxes } from '../actions.js';

componentDidMount() {
  this.props.getFoxy();
}

    // inside the render()
  { this.props.foxes.loading === true ? <FoxCard /> : null }

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

// FoxCard.js

import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

const FoxCard = props => {
  return (
    <div className="quack">
      <Card
        image={props.foxes.picture.image}
        header='Hey Foxy'
        meta='Do foxes eat ducks?'
      />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    foxes: state.foxes
  }
}

export default connect(mapStateToProps)(FoxCard);
