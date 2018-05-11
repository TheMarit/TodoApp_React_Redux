import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, GET_TODOS } from './actionCreators';

const initialState = {
    todos: []
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_TODOS:
            return {...state, todos: action.data};
        case ADD_TODO:
           return {...state, todos: [...state.todos, action.task]}
        case REMOVE_TODO:
            var todos = state.todos.filter(todo => action.id !== todo._id);
            return {
                ...state, todos
            };
        case UPDATE_TODO:
            var todos = state.todos.map(todo => {
                if(todo._id === action.id){
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