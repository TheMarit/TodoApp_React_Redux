import React from 'react';

const Todo = ({task, removeTodo, updateTodo, completed}) => (
    <li>
        <span 
            onClick={updateTodo} 
            style={ completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
        >
        {task}
        </span>
        <button onClick={removeTodo}>X</button>
    </li>
    )

export default Todo;