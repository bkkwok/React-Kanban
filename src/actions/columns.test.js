import * as action from "./columns";
import * as TYPE from "./types";
import { createState } from "../reducers/selectors.test";

describe("column actions", function() {
  it("addColumn", function() {
    const actual = action.addColumn(1, "ToDo");
    actual.column.id = !!actual.column.id;

    const expected = {
      type: TYPE.ADD_COLUMN,
      boardId: 1,
      column: {
        id: true,
        name: "ToDo",
        tasks: []
      }
    };

    expect(actual).toEqual(expected);
  });

  it("delColumn", function() {
    const actual = action.delColumn(1, 1, [1, 2]);
    const expected = {
      type: TYPE.DEL_COLUMN,
      boardId: 1,
      columnId: 1,
      taskIds: [1, 2]
    };

    expect(actual).toEqual(expected);
  });
});
