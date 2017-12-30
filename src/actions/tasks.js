import { ADD_TASK, DEL_TASK, EDIT_TASK, MOVE_TASK } from "./types";
import uuidv4 from "uuid/v4";

export function addTask(columnId, task, priority) {
  return {
    type: ADD_TASK,
    columnId: columnId,
    task: {
      id: uuidv4(),
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
  };
}

export function moveTask(fromColumnId, toColumnId, taskId) {
  return {
    type: MOVE_TASK,
    fromColumnId: fromColumnId,
    toColumnId: toColumnId,
    taskId: taskId
  };
}
