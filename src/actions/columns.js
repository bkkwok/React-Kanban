import { ADD_COLUMN, DEL_COLUMN } from "./types";

let currentId = 1;

export function addColumn(boardId, name) {
  return {
    type: ADD_COLUMN,
    boardId: boardId,
    column: {
      id: ++currentId,
      name: name,
      tasks: []
    }
  };
}

export function delColumn(boardId, columnId, taskIds) {
  return {
    type: DEL_COLUMN,
    boardId: boardId,
    columnId: columnId,
    taskIds: taskIds
  };
}

export function getColumnTaskIds(state, columnId) {
  return state.columns[columnId].tasks;
}

export function deleteColumn(boardId, columnId) {
  return (dispatch, getState) => {
    const taskIds = getColumnTaskIds(getState(), columnId);

    dispatch(delColumn(boardId, columnId, taskIds));
  };
}
