import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './apiReducer'

const store = createStore(reducer, applyMiddleware(thunk))
export default store