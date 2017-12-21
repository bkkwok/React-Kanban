import * as selector from "./";

export function createState() {
  return {
    boards: {
      "1": { id: 1, name: "Task Board", columns: [1, 2] },
      "2": { id: 2, name: "ToDo Board", columns: [3] }
    },
    columns: {
      "1": {
        id: 1,
        name: "inProgress",
        tasks: [1, 2]
      },
      "2": {
        id: 2,
        name: "done",
        tasks: [3]
      },
      "3": {
        id: 3,
        name: "todo",
        tasks: []
      }
    },
    tasks: {
      "1": {
        id: 1,
        task: "add more styles",
        priority: "low"
      },
      "2": {
        id: 2,
        task: "even more styles",
        priority: "medium"
      },
      "3": {
        id: 3,
        task: "fix bug",
        priority: "high"
      }
    }
  };
}

describe("Selectors", function() {
  describe("boardSelector", function() {
    it("selects board with given id", function() {
      const state = createState();
      const actual = selector.boardSelector(state, 1);
      const expected = state.boards[1];

      expect(actual).toEqual(expected);
    });

    it("should return null if id does not exist", function() {
      const state = createState();
      const actual = selector.boardSelector(state, 99);

      expect(actual).toBeNull();
    });
  });

  describe("columnsPerBoardSelector", function() {
    it("select all columns that belong to the given board id", function() {
      const state = createState();
      const actual = selector.columnsPerBoardSelector(state, 1);
      const expected = [
        {
          id: 1,
          name: "inProgress",
          tasks: [1, 2]
        },
        {
          id: 2,
          name: "done",
          tasks: [3]
        }
      ];

      expect(actual).toEqual(expected);
    });

    it("should return null if board does not exist", function() {
      const state = createState();
      const actual = selector.columnsPerBoardSelector(state, 99);

      expect(actual).toBeNull();
    });
  });

  describe("tasksPerColumnSelector", function() {
    it("select all tasks that belong to the given column id", function() {
      const state = createState();
      const actual = selector.tasksPerColumnSelector(state, 1);
      const expected = [
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
      ];

      expect(actual).toEqual(expected);
    });
  });
});
