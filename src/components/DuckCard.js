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
        meta='Friend'
        description='This a good duck. Is this duck cute?'
      />
    <button onClick={duckVote}> + </button>
    <button onClick={downVoteDatDuck}> - </button>
    </div>
  )
}

export default DuckCard;
