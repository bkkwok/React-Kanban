import { ADD_BOARD, DEL_BOARD } from './types';
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

export function deleteBoard(id) {
  return {
    type: DEL_BOARD,
    id: id
  };
}
