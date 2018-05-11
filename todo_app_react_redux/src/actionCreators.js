export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const GET_TODOS = "GET_TODOS";

function handleTodos(data){
    return {type: GET_TODOS, data: data};
}

function handleAdd(task){
    return {type: ADD_TODO, task: task};
}

function handleRemove(id){
    return {type: REMOVE_TODO, id: id};
}

function handleUpdate(id){
    return {type: UPDATE_TODO, id: id};
}

export function getTodos() {
    return dispatch => {
        return fetch("/api/todos")
            .then(res => res.json())
            .then(data => dispatch(handleTodos(data)))
            .catch(err => console.log('something went wrong', err));
    };
}

export function addTodo(task) {
    return dispatch => {
        return fetch("/api/todos", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({task})
        })
            .then(res => res.json())
            .then(data => dispatch(handleAdd(data)))
            .catch(err => console.log('something went wrong', err));
    };
}

export function removeTodo(id) {
    return dispatch => {
        return fetch(`/api/todos/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => dispatch(handleRemove(id)))
            .catch(err => console.log('something went wrong', err));
    };
}

export function updateTodo(id) {
    return dispatch => {
        return fetch(`/api/todos/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => dispatch(handleUpdate(id)))
            .catch(err => console.log('something went wrong', err));
    };
}