import { DEL_BOARD, DEL_COLUMN, ADD_TASK, DEL_TASK } from "../actions/types";
import omit from "lodash/omit";

export default function tasks(state = {}, action) {
  switch (action.type) {
    case DEL_BOARD:
      return omit(state, action.taskIds);
    case DEL_COLUMN:
      return omit(state, action.taskIds);
    case ADD_TASK:
      return {
        ...state,
        [action.task.id]: {
          ...action.task
        }
      };
    case DEL_TASK:
      return omit(state, action.id);
    default:
      return state;
  }
}

export const getTask = (state, id) => {
  return state.tasks[id];
};
