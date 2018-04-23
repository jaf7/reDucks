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
