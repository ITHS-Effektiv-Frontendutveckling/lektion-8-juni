const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    payload: todos
  }
}

export default { addTodo, addTodos };