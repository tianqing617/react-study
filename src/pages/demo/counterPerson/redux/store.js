import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { counterReducer } from './reducer'

export default createStore(counterReducer, composeWithDevTools(applyMiddleware(thunk)));
