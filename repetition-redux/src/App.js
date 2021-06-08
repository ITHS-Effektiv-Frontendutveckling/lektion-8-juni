import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

import actions from './actions/todoActions';

function App() {
  const todos = useSelector((state) => { return state.todos });
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
      const data = await response.json();
      console.log('getTodos:', data);
      dispatch(actions.addTodos(data.todos));
    }

    getTodos();
  }, []);

  return (
    <section>
      <article className="todo-app">
        <h1>Todo App</h1>
        <ul className="todo-list">
            { todos.map((todo) => {
                return <TodoItem task={ todo.task } key={ todo.id } />
            }) }
        </ul>
      </article>
      <AddTodo />
    </section>
  );
}

export default App;
