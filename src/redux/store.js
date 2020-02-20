import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Reducer function from file
import {contentReducer} from './reducer'

const store = createStore(contentReducer, applyMiddleware(thunk));

export default store;