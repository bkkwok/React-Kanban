import reducer from "./";
import { getIdsWithBoard } from "../actions/boards";
import { getIdsWithColumn } from "../actions/columns";
import { createState } from "./selectors.test";

it("deleteBoard action should delete all ids associated with the given boardId", function() {
  const action = getIdsWithBoard(createState(), 1);
  const actual = reducer(createState(), action);
  const expected = {
    boards: {
      "2": {
        id: 2,
        name: "ToDo Board",
        columns: [3]
      }
    },
    columns: {
      "3": {
        id: 3,
        name: "todo",
        tasks: []
      }
    },
    tasks: {}
  };

  expect(actual).toEqual(expected);
});

it("deleteColumn action should delete all ids associated with the given columnId", function() {
  const state = createState();
  const action = getIdsWithColumn(state, 1);
  const actual = reducer(createState(), action);
  const expected = Object.assign(state, {
    columns: {
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
      "3": {
        id: 3,
        task: "fix bug",
        priority: "high"
      }
    }
  });

  expect(actual).toEqual(expected);
});
