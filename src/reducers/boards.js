import { ADD_BOARD, DEL_BOARD } from "../actions/boards";
import omit from 'lodash.omit';


export default function boards(state = {}, action) {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, [action.id]: { ...action.board } };
    case DEL_BOARD:
      return omit(state, action.id);
    default: return state;
  }
}
