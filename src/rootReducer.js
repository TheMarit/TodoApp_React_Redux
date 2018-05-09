import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators';

const initialState = {
    todos: [],
    id: 0
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            var newState = {...state};
            newState.id++;
            return {
                ...newState,
                todos: [...newState.todos, {task: action.task, id: newState.id, completed: false}]
            };
        case REMOVE_TODO:
            var todos = state.todos.filter(todo => action.id !== todo.id)
            return {
                ...state, todos
            }
        case UPDATE_TODO:
            var todos = state.todos.map(todo => {
                if(todo.id === action.id){
                    var completed = todo.completed;
                    return {...todo, completed: !completed};
                }
                return todo;
            })
            return {...state, todos};
        default:
            return state;
    }
}