export const ADD_BOARD = "ADD_BOARD";
export const DEL_BOARD = "DEL_BOARD";

let currentId = 0;

export function addBoard(name) {
  return {
    type: ADD_BOARD,
    id: ++currentId,
    board: {
      name: name,
      columns: []
    }
  };
}

export function deleteBoard(id) {
  return {
    type: DEL_BOARD,
    id: id
  };
}
