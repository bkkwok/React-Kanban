import { combineReducers } from "redux";
import boards, * as fromBoards from "./boards";
import columns, * as fromColumns from "./columns";
import tasks, * as fromTasks from "./tasks";
import userinterface, * as fromUserInterface from "./userinterface";

export default combineReducers({
  boards,
  columns,
  tasks,
  userinterface
});

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const allBoardsSelector = state => fromBoards.getAllBoards(state);

export const boardSelector = (state, id) => fromBoards.getBoard(state, id);

export const columnsPerBoardSelector = (state, boardId) => {
  let board = fromBoards.getBoard(state, boardId);

  if (board) {
    return board.columns.map(colId => fromColumns.getColumn(state, colId));
  }

  return null;
};

export const tasksPerColumnSelector = (state, colId) => {
  return fromColumns
    .getColumn(state, colId)
    .tasks.map(taskId => fromTasks.getTask(state, taskId));
};

export const getBoardListState = state =>
  fromUserInterface.getBoardListState(state.userinterface);
