import {
  DEL_BOARD,
  ADD_COLUMN,
  DEL_COLUMN,
  EDIT_COLUMN,
  ADD_TASK,
  DEL_TASK,
  MOVE_TASK
} from "../actions/types";
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
  it("should handle DEL_BOARD action", function() {
    const actual = reducer(createState(), {
      type: DEL_BOARD,
      boardId: "n/a",
      columnIds: [1, 2],
      taskIds: "n/a"
    });

    expect(actual).toEqual({});
  });

  it("should handle ADD_COLUMN action", function() {
    const actual = reducer(createState(), {
      type: ADD_COLUMN,
      boardId: 1,
      column: { id: 3, name: "toDo", tasks: [] }
    });
    const expected = Object.assign(createState(), {
      "3": { id: 3, name: "toDo", tasks: [] }
    });

    expect(actual).toEqual(expected);
  });

  it("should handle DEL_COLUMN action", function() {
    const actual = reducer(createState(), {
      type: DEL_COLUMN,
      boardId: 1,
      columnId: 1
    });
    const expected = omit(createState(), "1");

    expect(actual).toEqual(expected);
  });

  it("should handle EDIT_COLUMN action", function() {
    const actual = reducer(createState(), {
      type: EDIT_COLUMN,
      column: {
        id: 1,
        name: "new name"
      }
    });

    const expected = Object.assign(createState(), {
      "1": { id: 1, name: "new name", tasks: [1, 2] }
    });

    expect(actual).toEqual(expected);
  });

  it("should handle ADD_TASK action", function() {
    const actual = reducer(createState(), {
      type: ADD_TASK,
      columnId: 1,
      task: {
        id: 5,
        task: "erase styles",
        priority: "low"
      }
    });
    const state = createState();
    const expected = { ...state, "1": { ...state["1"], tasks: [1, 2, 5] } };

    expect(actual).toEqual(expected);
  });

  it("should handle DEL_TASK action", function() {
    const actual = reducer(createState(), {
      type: DEL_TASK,
      columnId: 1,
      taskId: 2
    });
    const expected = Object.assign(createState(), {
      "1": { id: 1, name: "inProgress", tasks: [1] }
    });

    expect(actual).toEqual(expected);
  });

  it("MOVE_TASK action should remove taskId from 'fromColumnId' and place in 'toColumnId'", function() {
    const actual = reducer(createState(), {
      type: MOVE_TASK,
      fromColumnId: 1,
      toColumnId: 2,
      taskId: 1
    });

    const expected = {
      "1": {
        id: 1,
        name: "inProgress",
        tasks: [2]
      },
      "2": {
        id: 2,
        name: "done",
        tasks: [3, 4, 1]
      }
    };

    expect(actual).toEqual(expected);
  });
});
