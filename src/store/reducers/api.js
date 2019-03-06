const defaultState = {heroes: [], error: false, loading: false}

export default function (state = defaultState, action) {
  const {type, payload} = action
  
  switch (type) {
    case 'GET_HEROES_SUCCESS':
      return {...state, heroes: payload, loading: false}
    case 'GET_HEROES_ERROR':
      return {...state, error: true, loading: false}
    case 'GET_HEROES_LOADING':
      return {...state, loading: true}
    default:
      return state
  }

}