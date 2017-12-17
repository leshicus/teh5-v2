import { combineReducers } from "redux";
import betlist from "./betlist";

const reducers = combineReducers({
    betlist: betlist
});

export default reducers;
