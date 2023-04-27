import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './models/Auth/reducer';

const rootReducers = combineReducers(
    {
        auth,
    });

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)) );
console.log("store created")
export default store;



