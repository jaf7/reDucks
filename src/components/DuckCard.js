import React from 'react';
import { Card } from 'semantic-ui-react'
import { upVote, downVote, cutieToggle } from '../actions.js'
import { connect } from 'react-redux'

const DuckCard = props => {
  const duckVote = () => {
    props.dispatchUpVote(props.duck.id)
  }

  const downVoteDatDuck = () => {
    props.dispatchDownVote(props.duck.id)
  }

  const cutieToggle = () => {
    props.dispatchCutie(props.duck.id)
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
        <button onClick={cutieToggle}> Cutie ??? </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchUpVote: id => dispatch(upVote(id)),
    dispatchDownVote: id => dispatch(downVote(id)),
    dispatchCutie: id => dispatch(cutieToggle(id))
  }
}

export default connect(null, mapDispatchToProps)(DuckCard)
