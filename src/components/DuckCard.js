import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const DuckCard = props => {
  const duckVote = () => {
    props.upVote(props.duck.id)
  }

  const downVoteDatDuck = () => {
    props.downVote(props.duck.id)
  }

  return (
    <div>
      <Card
        image={props.duck.image}
        header={props.duck.name}
        meta={props.duck.isCutie.toString()}
        description={props.duck.votes}

      />
      <div className="quacker">
    <button onClick={duckVote}> + </button>
    <button onClick={downVoteDatDuck}> - </button>
    </div>
    </div>
  )
}

export default DuckCard;
