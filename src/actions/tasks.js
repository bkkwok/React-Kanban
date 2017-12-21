import { ADD_TASK, DEL_TASK } from "./types";

let currentId = 1;

export function addTask(name, priority) {
  return {
    type: ADD_TASK,
    task: {
      id: ++currentId,
      task: name,
      priority: priority
    }
  };
}

export function deleteTask(id) {
  return {
    type: DEL_TASK,
    id: id
  };
}
