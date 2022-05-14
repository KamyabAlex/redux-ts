import { Dispatch } from "redux";

import { actionTypes } from "../action-types";
import { Action } from "../actions";
export const depositMoney = (amount: number) => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: actionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: actionTypes.WITHDRAW,
      payload: amount,
    });
  };
};

export const Bankrupt = () => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: actionTypes.BANKRUPT,
    });
  };
};
