import {
  DEL_BOARD,
  ADD_COLUMN,
  DEL_COLUMN,
  EDIT_COLUMN,
  ADD_TASK,
  DEL_TASK,
  MOVE_TASK
} from "../actions/types";
import omit from "lodash.omit";

export default function columns(state = {}, action) {
  switch (action.type) {
    case DEL_BOARD:
      return omit(state, action.columnIds);
    case ADD_COLUMN:
      return { ...state, [action.column.id]: { ...action.column } };
    case DEL_COLUMN:
      return omit(state, action.columnId);
    case EDIT_COLUMN:
      return {
        ...state,
        [action.column.id]: {
          ...state[action.column.id],
          name: action.column.name
        }
      };
    case ADD_TASK:
      return addTask(state, action);
    case DEL_TASK:
      return delTask(state, action);
    case MOVE_TASK:
      return moveTask(state, action);
    default:
      return state;
  }
}

export const addTask = (state, action) => {
  let column = state[action.columnId];
  return {
    ...state,
    [action.columnId]: {
      ...column,
      tasks: [...column.tasks, action.task.id]
    }
  };
};

export const delTask = (state, action) => {
  const column = state[action.columnId];
  return {
    ...state,
    [action.columnId]: {
      ...column,
      tasks: column.tasks.filter(id => action.taskId !== id)
    }
  };
};

export const moveTask = (state, action) => {
  const fromColumn = state[action.fromColumnId];
  const toColumn = state[action.toColumnId];
  const taskId = action.taskId;

  return {
    ...state,
    [action.fromColumnId]: {
      ...fromColumn,
      tasks: fromColumn.tasks.filter(id => taskId !== id)
    },
    [action.toColumnId]: {
      ...toColumn,
      tasks: [...toColumn.tasks, taskId]
    }
  };
};

export const getColumn = (state, id) => {
  return state.columns[id];
};
