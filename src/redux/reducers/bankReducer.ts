import { actionTypes } from "../action-types";
import { Action } from "../actions/index";
const initialState = 0;
const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return state + action.payload;
    case actionTypes.WITHDRAW:
      return state - action.payload;
    case actionTypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};



export default bankReducer;
