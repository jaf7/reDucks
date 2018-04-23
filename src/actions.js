const URL = 'https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/'

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

export function fetchFoxes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FOXES' });
    return fetch(URL)
      .then(response => response.json())
      .then(json => dispatch({ type: 'ADD_FOXES', payload: json }));
  }
}
