import React from 'react';
import DuckCard from './DuckCard.js';

const DuckList = props => {
  const mapDucks = () => {
    let ducksArray = Object.values(props.ducks)
    return ducksArray.map(duck => <DuckCard duck={duck} upVote={props.upVote} downVote={props.downVote} />)
  }
  return (
    <div className="quack">

      {mapDucks()}
    </div>
  )
}

export default DuckList;
