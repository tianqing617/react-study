import { createStore, applyMiddleware } from 'redux'
import counterReudcer from './counterReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(counterReudcer, composeWithDevTools(applyMiddleware(thunk)));
