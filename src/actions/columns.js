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

export function deleteColumn(id) {
  return {
    type: DEL_COLUMN,
    id: id
  }
}
