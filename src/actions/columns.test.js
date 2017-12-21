import * as action from "./columns";
import * as TYPE from "./types";
import { createState } from "../reducers/selectors.test";

describe("column actions", function() {
  it("addColumn", function() {
    const actual = action.addColumn("ToDo");
    actual.column.id = !!actual.column.id;

    const expected = {
      type: TYPE.ADD_COLUMN,
      column: {
        id: true,
        name: "ToDo",
        tasks: []
      }
    };

    expect(actual).toEqual(expected);
  });

  it("getIdsWithColumn", function() {
    const actual = action.getIdsWithColumn(createState(), 1);
    const expected = {
      type: TYPE.DEL_COLUMN,
      columnId: 1,
      taskIds: [1, 2]
    };

    expect(actual).toEqual(expected);
  });
});
