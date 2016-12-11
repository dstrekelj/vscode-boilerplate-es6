export const actions = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK'
}

const handlers = {
  [actions.ADD_TASK]: (state, action) => ({
    tasks: [ ...state.tasks, action.payload.task ]
  }),
  [actions.REMOVE_TASK]: (state, action) => ({
    tasks: state.tasks.filter(e => e.id !== action.payload.task.id)
  })
}

const initialState = {
  tasks: []
}

export const reducer = (state = initialState, action) => {
  const handler = handlers[action.type]
  return handler ? handler(state, action) : state
}
