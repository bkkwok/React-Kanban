import * as TYPE from "./types";
import * as action from "./tasks";

describe("task actions", function() {
  it("addTask", function() {
    const actual = action.addTask("add more styles", "low");
    actual.task.id = !!actual.task.id;
    const expected = {
      type: TYPE.ADD_TASK,
      task: {
        id: true,
        task: "add more styles",
        priority: "low"
      }
    };
    expect(actual).toEqual(expected);
  });
  it("deleteTask", function() {
    const actual = action.deleteTask(1);
    const expected = {
      type: TYPE.DEL_TASK,
      id: 1
    };

    expect(actual).toEqual(expected);
  });
});
