import * as action from "./boards";
import * as TYPE from "./types";
import { createState } from "../reducers/selectors.test";

describe("board actions", function() {
  it("addBoard", function() {
    const actual = action.addBoard("Tasks");
    //check for existance, rather than a specific id
    actual.board.id = !!actual.board.id;

    const expected = {
      type: TYPE.ADD_BOARD,
      board: {
        id: true,
        name: "Tasks",
        columns: []
      }
    };

    expect(actual).toEqual(expected);
  });

  it("getIdsWithBoard", function() {
    const actual = action.getIdsWithBoard(createState(), 1);
    const expected = {
      type: TYPE.DEL_BOARD,
      boardId: 1,
      columnIds: [1, 2],
      taskIds: [1, 2, 3]
    };

    expect(actual).toEqual(expected);
  });
});
