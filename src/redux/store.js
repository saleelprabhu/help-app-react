import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Reducer function from file
import {contentReducer} from './reducer'

/* 
Create store with reducer and thunk middleware
*/

const store = createStore(contentReducer, applyMiddleware(thunk));

export default store;