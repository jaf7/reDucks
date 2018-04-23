const defaultState = {
    ducks: {
      one: { id: 'one', name: 'Masterpiece', age: 1, image: 'https://image.ibb.co/gkHQNS/mattsduck.png', votes: 0, isCutie: false },
      two: { id: 'two', name: 'Garrette', age: 2, image: 'https://vignette.wikia.nocookie.net/animorphs/images/b/b8/Animorphs_51_absolute_front_cover_scholastic.jpg/revision/latest/scale-to-width-down/341?cb=20180415110651', votes: 0, isCutie: true },
      three: { id: 'three', name: 'nice lil plump boi who would make for delicious dinner', age: 3, image: 'https://i.imgur.com/dyy5tkU.jpg', votes: 0, isCutie: false },
      four: { id: 'four', name: 'DD the OG duck', age: 4, image: 'https://vignette.wikia.nocookie.net/disney/images/a/ac/Disneys_donald_duck-1062.jpg/revision/latest?cb=20130907032143', votes: 0, isCutie: true }
    },
    foxes: {
      loading: false,
      picture: {}
    }
  }

export function rootReducer(state = defaultState, action){
  switch(action.type) {
    case 'INCREASE_VOTE':
      return {...state,
          ducks: {
            ...state.ducks,
            [action.payload.duckId]: {
              ...state.ducks[action.payload.duckId],
              votes: state.ducks[action.payload.duckId].votes + 1
            }
          }
        }
    case 'DECREASE_VOTE':
      return {...state,
        ducks: {
            ...state.ducks,
            [action.payload.duckId]: {
              ...state.ducks[action.payload.duckId],
              votes: state.ducks[action.payload.duckId].votes - 1
            }
          }
      }
    case 'CUTIE_TOGGLE':
      return {...state,
        ducks: {
          ...state.ducks,
          [action.payload.duckId]: {
            ...state.ducks[action.payload.duckId],
            isCutie: !state.ducks[action.payload.duckId].isCutie
          }
        }
      }
    case 'LOADING_FOXES':
      return {...state,
        foxes: {
          loading: {
            ...!state.foxes.loading
          }
        }
      }
    case 'ADD_FOXES':
      return {...state,
        foxes: {
          loading: true,
          picture: action.payload
        }
      }
    default:
      return state;
  }
}
