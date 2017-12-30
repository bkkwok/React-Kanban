import uuidv4 from "uuid/v4";

const boardId = uuidv4();
const colOneId = uuidv4();
const colTwoId = uuidv4();

export function createDefaultState() {
  return {
    boards: {
      [boardId]: {
        id: boardId,
        name: "Untitled board",
        columns: [colOneId, colTwoId]
      }
    },
    columns: {
      [colOneId]: {
        id: colOneId,
        name: "inProgress",
        tasks: []
      },
      [colTwoId]: {
        id: colTwoId,
        name: "ToDo",
        tasks: []
      }
    },
    tasks: {}
  };
}
