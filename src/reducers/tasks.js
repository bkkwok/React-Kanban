
let fakeState = {
  '0': {
    id: 0,
    task: 'more styles',
    priority: 'low'
  }
}

export default function tasks(state = fakeState, action) {
  switch(action.type) {
    default: return state;
  }
}

export const getTask = (state, id) => {
  return state.tasks[id]
}
