import { ADD_TASK, DEL_TASK, EDIT_TASK } from "./types";

let currentId = 1;

export function addTask(columnId, task, priority) {
  return {
    type: ADD_TASK,
    columnId: columnId,
    task: {
      id: ++currentId,
      task: task,
      priority: priority,
      timestamp: new Date(Date.now()).toLocaleDateString()
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

export function editTask(id, task, priority) {
  return {
    type: EDIT_TASK,
    task: {
      id: id,
      task: task,
      priority: priority
    }
  }
}
