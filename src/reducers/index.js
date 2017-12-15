import { combineReducers } from "redux";
import boards from "./boards";
import columns from "./columns";
import boardView from "./boardView";
import tasks from "./tasks";

export default combineReducers({
  boardView,
  boards,
  columns,
  tasks
});

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const selectBoard = state => {
  let board = { ...state.boards[state.boardView.currentBoard] };

  if(isEmpty(board)) return null;

  board.columns = board.columns.map(id => {
    return { id: id, ...state.columns[id] };
  });

  board.columns.forEach(col => {
    col.tasks = col.tasks.map(id => {
      return { id: id, ...state.tasks[id] };
    });
  });

  return board;
};
