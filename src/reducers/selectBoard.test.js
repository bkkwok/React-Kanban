import { selectBoard } from "./";

function createState() {
  return {
    boardView: { currentBoard: "1" },
    boards: {
      "1": { name: "Task Board", columns: [1, 2] }
    },
    columns: {
      "1": {
        name: "inProgress",
        tasks: [1, 2]
      },
      "2": {
        name: "done",
        tasks: [3]
      }
    },
    tasks: {
      "1": {
        task: "add more styles",
        priority: "low"
      },
      "2": {
        task: "even more styles",
        priority: "medium"
      },
      "3": {
        task: "fix bug",
        priority: "high"
      }
    }
  };
}

describe("selectBoard", function() {
  it("should return null if there is no currentBoard active", function() {
    const state = {
      boardView: { currentBoard: null },
      boards: {},
      columns: {},
      tasks: {}
    };

    const actual = selectBoard(state);

    expect(actual).toBeNull();
  });

  it("should return null if there is board id does not exist", function() {
    const state = Object.assign(createState(), {
      boardView: { currentBoard: 66 }
    });

    const actual = selectBoard(state);

    expect(actual).toBeNull();
  });

  it("should select the appropriate board along with its columns and tasks", function() {
    const actual = selectBoard(createState());

    const expected = {
      name: "Task Board",
      columns: [
        {
          id: 1,
          name: "inProgress",
          tasks: [
            {
              id: 1,
              task: "add more styles",
              priority: "low"
            },
            {
              id: 2,
              task: "even more styles",
              priority: "medium"
            }
          ]
        },
        {
          id: 2,
          name: "done",
          tasks: [
            {
              id: 3,
              task: "fix bug",
              priority: "high"
            }
          ]
        }
      ]
    };

    expect(actual).toEqual(expected);
  });
});
