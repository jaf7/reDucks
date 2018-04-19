import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

const DuckCard = props => {
  const duckVote = () => {
    props.upVote(props.duck.id);
  }

  const downVoteDatDuck = () => {
    props.downVote(props.duck.id);
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

export default DuckCard;
