import { createStore } from 'redux'
import counterReudcer from './counterReducer'

export default createStore(counterReudcer);
