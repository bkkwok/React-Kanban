import { ADD_BOARD, DEL_BOARD } from "../actions/types";
import omit from 'lodash.omit';

const initialState = {
  '0': {
    id: 0,
    name: 'Untitled board',
    columns: [0, 1]
  }
}

export default function boards(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, [action.board.id]: { ...action.board } };
    case DEL_BOARD:
      return omit(state, action.boardId);
    default: return state;
  }
}

export const getAllBoards = state => {
  return state.boards;
}

export const getBoard = (state, id) => {
  return state.boards.hasOwnProperty(id) ? state.boards[id] : null
}