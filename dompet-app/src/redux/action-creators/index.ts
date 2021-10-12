import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const depositMoney =
  (amount: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount
    });
  };

export const withDrawMoney =
  (amount: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount
    });
  };

export const spendMoney = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SPEND
  });
};
