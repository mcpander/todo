/**
 * Created by McPander on 30.05.2017.
 */
import {createStore} from 'redux';
import { combineReducers } from 'redux'
import reducers from './reducers/todos';
export default createStore(reducers);
