import { ActionType } from '../action-types';

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface SpendMoney {
  type: ActionType.SPEND;
}

export type Action = DepositAction | WithdrawAction | SpendMoney;
