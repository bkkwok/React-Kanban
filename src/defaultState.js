import uuidv4 from "uuid/v4";

function createIds(num) {
  const ids = [];

  for(let i = 0; i < num; i++) {
    ids.push(uuidv4())
  }

  return ids;
}

const boardId = uuidv4();
const columnIds = createIds(2);
const taskIds = createIds(3);

export function createDefaultState() {
  const timestamp = new Date(Date.now()).toLocaleDateString();
  return {
    boards: {
      [boardId]: {
        id: boardId,
        name: "Untitled board",
        columns: [columnIds[0], columnIds[1]]
      }
    },
    columns: {
      [columnIds[0]]: {
        id: columnIds[0],
        name: "inProgress",
        tasks: [taskIds[0], taskIds[1]]
      },
      [columnIds[1]]: {
        id: columnIds[1],
        name: "ToDo",
        tasks: [taskIds[2]]
      }
    },
    tasks: {
      [taskIds[0]]: {
        id: taskIds[0],
        task: 'New UI for dashboard',
        priority: 'low',
        timestamp: timestamp
      },
      [taskIds[1]]: {
        id: taskIds[1],
        task: 'Initial landing page concepts',
        priority: 'low',
        timestamp: timestamp
      },
      [taskIds[2]]: {
        id: taskIds[2],
        task: 'Prepare structural documentation',
        priority: 'high',
        timestamp: timestamp
      }
    }
  };
}
