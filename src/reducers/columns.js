import {
  DEL_BOARD,
  ADD_COLUMN,
  DEL_COLUMN,
  EDIT_COLUMN,
  ADD_TASK,
  DEL_TASK
} from "../actions/types";
import omit from "lodash.omit";

const defaultState = {
  "0": {
    id: 0,
    name: "inProgress",
    tasks: []
  },
  "1": {
    id: 1,
    name: "ToDo",
    tasks: []
  }
};

export default function columns(state = defaultState, action) {
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

export const getColumn = (state, id) => {
  return state.columns[id];
};
