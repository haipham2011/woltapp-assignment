import { combineReducers } from "redux";
import restaurants from './restaurants/reducer';
import sort from './sort/reducer';
import page from './page/reducer';

export default combineReducers({ restaurants, page, sort });