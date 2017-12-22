import { ADD_TASK, DEL_TASK } from "../actions/types";
import reducer from "./tasks";
import omit from "lodash/omit";

function createState() {
  return {
    "1": {
      id: 1,
      task: "add more styles",
      priority: "low"
    },
    "2": {
      id: 2,
      task: "add even more styles",
      priority: "medium"
    }
  };
}

describe("Task Reducer", function() {
  it("should handle ADD_TASK action", function() {
    const actual = reducer(createState(), {
      type: ADD_TASK,
      columnId: 1,
      task: { id: 3, task: "erase styles", priority: "high" }
    });

    const expected = Object.assign(createState(), {
      "3": { id: 3, task: "erase styles", priority: "high" }
    });

    expect(actual).toEqual(expected);
  });

  it("should handle DEL_TASK action", function() {
    const actual = reducer(createState(), {
      type: DEL_TASK,
      columnId: 2,
      taskId: 1
    });

    const expected = omit(createState(), "1");

    expect(actual).toEqual(expected);
  });
});
