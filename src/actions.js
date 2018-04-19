export let upVote = duckId => {
  return {
    type: "INCREASE_VOTE",
    payload: {
      duckId: duckId
    }
  }
}

export let downVote = duckId => {
  return {
    type: "DECREASE_VOTE",
    payload: {
      duckId: duckId
    }
  }
}

export let cutieToggle = duckId => {
  return {
    type: 'CUTIE_TOGGLE',
    payload: {
      duckId: duckId
    }
  }
}
