import reducer from "./boards";
import omit from "lodash.omit";
import { ADD_BOARD, DEL_BOARD } from "../actions/types";

function createState() {
  return {
    "1": {
      id: 1,
      name: "Tasks",
      columns: [1, 2]
    },
    "2": {
      id: 2,
      name: "ToDo",
      columns: [3, 4]
    }
  };
}

describe("Board Reducer", function() {
  it("should handle ADD_BOARD action", function() {
    const actual = reducer(createState(), {
      type: ADD_BOARD,
      board: {
        id: 3,
        name: "Progress",
        columns: []
      }
    });
    const expected = Object.assign(createState(), {
      "3": { id: 3, name: "Progress", columns: [] }
    });
    expect(actual).toEqual(expected);
  });

  it("should handle DEL_BOARD action", function() {
    const actual = reducer(createState(), { type: DEL_BOARD, boardId: 1 });
    const expected = omit(createState(), "1");
    expect(actual).toEqual(expected);
  });
});