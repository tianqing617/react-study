import { combineReducers } from 'redux'
import counter from './counter'
import person from './person'

// 汇总所有的 reducer，变为一个总的reducers
export default combineReducers({
	counter,
	person
})
