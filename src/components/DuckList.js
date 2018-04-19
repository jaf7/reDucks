import React from 'react';
import DuckCard from './DuckCard.js';
import {connect} from 'react-redux'

const DuckList = props => {
  const mapDucks = () => {
    let ducksArray = Object.values(props.ducks)
    return ducksArray.map(duck => <DuckCard
      key={duck.id}
      duck={duck}
      />)
  }
  return (
    <div className="quack">
      {mapDucks()}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    ducks: state.ducks
  }
}

export default connect(mapStateToProps)(DuckList)
