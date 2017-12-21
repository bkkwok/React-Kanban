import { ADD_COLUMN, DEL_COLUMN } from "./types";

let currentId = 1;

export function addColumn(name) {
  return {
    type: ADD_COLUMN,
    column: {
      id: ++currentId,
      name: name,
      tasks: []
    }
  };
}

export function getIdsWithColumn(state, id) {
  const { tasks } = state.columns[id];

  return {
    type: DEL_COLUMN,
    columnId: id,
    taskIds: tasks
  };
}

export function deleteColumn(id) {
  return (dispatch, getState) => {
    const action = getIdsWithColumn(getState(), id);

    dispatch(action);
  };
}
