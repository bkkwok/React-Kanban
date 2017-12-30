import * as TYPE from "../actions/types";

const initialState = { isBoardListCollapsed: false };

export default function userinterface(state = initialState, action) {
  switch (action.type) {
    case TYPE.COLLAPSE_BOARDLIST:
      return { ...state, isBoardListCollapsed: true };

    case TYPE.SHOW_BOARDLIST:
      return { ...state, isBoardListCollapsed: false };

    default:
      return state;
  }
}

export const getBoardListState = state => state.isBoardListCollapsed