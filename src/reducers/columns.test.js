import { ADD_COLUMN, DEL_COLUMN } from "../actions/types";
import reducer from "./columns";
import omit from "lodash.omit";

function createState() {
  return {
    "1": {
      id: 1,
      name: "inProgress",
      tasks: [1, 2]
    },
    "2": {
      id: 2,
      name: "done",
      tasks: [3, 4]
    }
  };
}

describe("Column Reducer", function() {
  it("should handle ADD_COLUMN action", function() {
    const actual = reducer(createState(), {
      type: ADD_COLUMN,
      column: { id: 3, name: "toDo", tasks: [] }
    });
    const expected = Object.assign(createState(), {
      "3": { id: 3, name: "toDo", tasks: [] }
    });

    expect(actual).toEqual(expected);
  });
  it("should handle DEL_COLUMN action", function() {
    const actual = reducer(createState(), { type: DEL_COLUMN, id: 1 });
    const expected = omit(createState(), "1");

    expect(actual).toEqual(expected);
  });
});
