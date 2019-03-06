import axios from 'axios';

export function getHeroes () {
  console.log('halo?')
  return dispatch => {
    dispatch({type: 'GET_HEROES_LOADING'})
    axios.get('https://cors-anywhere.herokuapp.com/https://api.opendota.com/api/heroStats')
      .then(({data}) => {
        dispatch({type: 'GET_HEROES_SUCCESS', payload: data})
      })
      .catch(err => {
        dispatch({type: 'GET_HEROES_ERROR'})
      })
  }
}