import { ADD_BOARD, DEL_BOARD } from "./types";
let currentId = 1;

export function addBoard(name) {
  return {
    type: ADD_BOARD,
    board: {
      id: ++currentId,
      name: name,
      columns: []
    }
  };
}

export function getIdsWithBoard(state, id) {
  const { columns } = state.boards[id];

  const tasks = columns.reduce((tasks, colId) => {
    return tasks.concat(state.columns[colId].tasks);
  }, []);

  return {
    type: DEL_BOARD,
    boardId: id,
    columnIds: columns,
    taskIds: tasks
  };
}

export function deleteBoard(id) {
  return (dispatch, getState) => {
    const action = getIdsWithBoard(getState(), id);

    dispatch(action);
  };
}
