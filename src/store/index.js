import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// reducers
import kosasih from './reducers/kosasih'
import api from './reducers/api'


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
const logger2 = store => next => action => {
  console.log('dispatching2', action)
  let result = next(action)
  console.log('next state2', store.getState())
  return result
}
const store = createStore(
  combineReducers({kosasih, api}), 
  composeWithDevTools(applyMiddleware(logger, thunk, logger2)))

export default store