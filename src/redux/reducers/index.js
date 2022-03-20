import ChangeModelState from "./modalreducer";
import ChangeCardState from "./cardreducer";
import ChangeCartState from "./cartreducer"
import { combineReducers } from "redux";
const RootReducers=combineReducers({
    ChangeModelState,
    ChangeCardState,
    ChangeCartState
})
export default RootReducers;