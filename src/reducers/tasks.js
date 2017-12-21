import { ADD_TASK, DEL_TASK } from "../actions/types";
import omit from "lodash/omit";

export default function tasks(state = {}, action) {
  switch (action.type) {
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
