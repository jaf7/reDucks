import React from 'react';
import { Card } from 'semantic-ui-react'
import {upVote, downVote} from '../actions.js'
import {connect} from 'react-redux'

const DuckCard = props => {
  const duckVote = () => {
    props.dispatchUpvote(props.duck.id)
  }

  const downVoteDatDuck = () => {
    props.dispatchDownvote(props.duck.id)
  }

  const isThisDuckACutie = `T/F is this duck a cutie? ${props.duck.isCutie.toString()}`;
  const description = `Votes for Dankness: ${props.duck.votes}`;

  return (
    <div>
      <Card
        image={props.duck.image}
        header={props.duck.name}
        meta={isThisDuckACutie}
        description={description}

      />
      <div className="quacker">
        <button onClick={duckVote}> + </button>
        <button onClick={downVoteDatDuck}> - </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchUpvote: id => dispatch(upVote(id)),
    dispatchDownvote: id => dispatch(downVote(id))
  }
}

export default connect(null, mapDispatchToProps)(DuckCard)
