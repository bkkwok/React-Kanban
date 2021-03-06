import {
  ADD_BOARD,
  DEL_BOARD,
  EDIT_BOARD,
  ADD_COLUMN,
  DEL_COLUMN
} from "../actions/types";
import omit from "lodash.omit";

export default function boards(state = {}, action) {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, [action.board.id]: { ...action.board } };
    case DEL_BOARD:
      return omit(state, action.boardId);
    case EDIT_BOARD:
      return {
        ...state,
        [action.board.id]: {
          ...state[action.board.id],
          name: action.board.name
        }
      };
    case ADD_COLUMN:
      return addColumn(state, action);
    case DEL_COLUMN:
      return delColumn(state, action);
    default:
      return state;
  }
}

export const addColumn = (state, action) => {
  const board = state[action.boardId];
  return {
    ...state,
    [action.boardId]: {
      ...board,
      columns: [...board.columns, action.column.id]
    }
  };
};

export const delColumn = (state, action) => {
  const board = state[action.boardId];

  return {
    ...state,
    [action.boardId]: {
      ...board,
      columns: board.columns.filter(colId => colId != action.columnId)
    }
  };
};

export const getAllBoards = state => {
  const boards = state.boards;

  return Object.keys(boards).map(id => boards[id]);
};

export const getBoard = (state, id) => {
  return state.boards.hasOwnProperty(id) ? state.boards[id] : null;
};
