const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            task: action.payload
          }
        ]
      }
    }
    case 'ADD_TODOS': {
      return {
        ...state,
        todos: action.payload
      }
    }
    default:
      return state;
  }
}

export default todoReducer;