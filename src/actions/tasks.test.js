import * as TYPE from "./types";
import * as action from "./tasks";

describe("task actions", function() {
  it("addTask", function() {
    const actual = action.addTask(1, "add more styles", "low");
    actual.task.id = !!actual.task.id;
    actual.task.timestamp = !!actual.task.timestamp;
    const expected = {
      type: TYPE.ADD_TASK,
      columnId: 1,
      task: {
        id: true,
        task: "add more styles",
        priority: "low",
        timestamp: true
      }
    };
    expect(actual).toEqual(expected);
  });

  it("deleteTask", function() {
    const actual = action.deleteTask(2, 1);
    const expected = {
      type: TYPE.DEL_TASK,
      columnId: 2,
      taskId: 1
    };

    expect(actual).toEqual(expected);
  });

  it("editTask", function() {
    expect(action.editTask(1, "remove styles", "high")).toEqual({
      type: TYPE.EDIT_TASK,
      task: {
        id: 1,
        task: "remove styles",
        priority: "high"
      }
    });
  });
});
