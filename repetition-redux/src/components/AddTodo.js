import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../actions/todoActions';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    function handleClick() {
      dispatch(actions.addTodo(todo))
    }

    return (
        <section className="add-todo">
            <input className="input-field" placeholder="Skriv in en todo" 
            onKeyUp={ (event) => { setTodo(event.target.value) }} />
            <button onClick={ handleClick }>Lägg till ny todo</button>
        </section>
    )
}

export default AddTodo;