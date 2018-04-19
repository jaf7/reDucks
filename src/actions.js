export let upVote = duckId => {
  return({
    type: "INCREASE_VOTE",
    payload:{
      duckId: duckId
    }
  })
}

export let downVote = duckId => {
  return({
    type: "DECREASE_VOTE",
    payload:{
      duckId: duckId
    }
  })
}
