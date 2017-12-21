import * as action from "./boards";
import * as TYPE from "./types";

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

  it("deleteBoard", function() {
    const actual = action.deleteBoard(1);
    const expected = {
      type: TYPE.DEL_BOARD,
      id: 1
    };

    expect(actual).toEqual(expected);
  });
});
