import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import kosasih from './reducers/kosasih'

const store = createStore(kosasih, composeWithDevTools())

export default store