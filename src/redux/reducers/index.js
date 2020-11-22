import {combineReducers} from "redux";

const appReducer = combineReducers(
   Object.assign({})
);
let rootReducer;
export default (rootReducer = (state, action) => {
   // if (action.type === LOGOUT) {
   //     state = undefined;
   // }
   return appReducer(state, action);
});
