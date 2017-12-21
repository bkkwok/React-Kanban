import * as action from "./columns";
import * as TYPE from "./types";

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

  it("deleteColumn", function() {
    const actual = action.deleteColumn(1);

    const expected = {
      type: TYPE.DEL_COLUMN,
      id: 1
    };

    expect(actual).toEqual(expected);
  });
});
