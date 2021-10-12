import { Action } from '../actions';
import { ActionType } from '../action-types';

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;

    case ActionType.WITHDRAW:
      if (state < 1) {
        alert(`Maaf uang anda sudah habis`);
        return 0;
      }
      return state - action.payload;

    case ActionType.SPEND:
      return 0;

    default:
      return state;
  }
};

export default reducer;
