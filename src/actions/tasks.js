import { ADD_TASK, DEL_TASK } from "./types";

let currentId = 1;

export function addTask(columnId, task, priority) {
  return {
    type: ADD_TASK,
    columnId: columnId,
    task: {
      id: ++currentId,
      task: task,
      priority: priority
    }
  };
}

export function deleteTask(columnId, id) {
  return {
    type: DEL_TASK,
    columnId: columnId,
    taskId: id
  };
}
