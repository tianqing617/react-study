import { createStore, applyMiddleware } from 'redux'
import counterReudcer from './counterReducer'
import thunk from 'redux-thunk'

export default createStore(counterReudcer, applyMiddleware(thunk));
