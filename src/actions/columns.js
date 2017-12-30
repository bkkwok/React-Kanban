import { ADD_COLUMN, DEL_COLUMN, EDIT_COLUMN } from "./types";
import uuidv4 from 'uuid/v4';

export function addColumn(boardId, name) {
  return {
    type: ADD_COLUMN,
    boardId: boardId,
    column: {
      id: uuidv4(),
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

export function editColumn(columnId, name) {
  return {
    type: EDIT_COLUMN,
    column: {
      id: columnId,
      name: name
    }
  }
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
