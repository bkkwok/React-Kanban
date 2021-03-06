import reducer from "./boards";
import omit from "lodash.omit";
import {
  ADD_BOARD,
  DEL_BOARD,
  EDIT_BOARD,
  ADD_COLUMN,
  DEL_COLUMN
} from "../actions/types";

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

  it("should handle EDIT_BOARD action", function() {
    const actual = reducer(createState(), {
      type: EDIT_BOARD,
      board: { id: 1, name: "new name" }
    });

    const expected = {
      ...createState(),
      "1": { id: 1, name: "new name", columns: [1, 2] }
    };

    expect(actual).toEqual(expected);
  });

  it("should handle ADD_COLUMN action", function() {
    const actual = reducer(createState(), {
      type: ADD_COLUMN,
      boardId: 1,
      column: {
        id: 5,
        name: "ToDo",
        tasks: []
      }
    });
    const expected = Object.assign(createState(), {
      "1": {
        id: 1,
        name: "Tasks",
        columns: [1, 2, 5]
      }
    });

    expect(actual).toEqual(expected);
  });

  it("should handle DEL_COLUMN action", function() {
    const actual = reducer(createState(), {
      type: DEL_COLUMN,
      boardId: 1,
      columnId: 1,
      taskIds: [1, 2]
    });

    const expected = {
      ...createState(),
      "1": {
        id: 1,
        name: "Tasks",
        columns: [2]
      }
    };

    expect(actual).toEqual(expected);
  });
});
