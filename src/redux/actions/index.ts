import { actionTypes } from "../action-types/index";

interface DepositAction {
  type: actionTypes.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: actionTypes.WITHDRAW;
  payload: number;
}

interface Bankrupt {
  type: actionTypes.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | Bankrupt;
