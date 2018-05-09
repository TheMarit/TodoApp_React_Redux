import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './actionCreators';

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {task: ''};
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({task: ''});
        e.target.reset()
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    removeTodo(id){
        this.props.removeTodo(id);
    }
    
    updateTodo(id){
        this.props.updateTodo(id);
    }
    
    render(){
        let todos = this.props.todos.map((todo, index) => (
            <Todo 
                task={todo.task} 
                key={index} 
                removeTodo={this.removeTodo.bind(this, todo.id)} 
                updateTodo={this.updateTodo.bind(this, todo.id)}
                completed={todo.completed}
            /> )
            )
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Task: </label>
                <input type='text' name="task" onChange={this.handleChange}/>
                <button>Add Todo</button>
            </form>
            <ul>{todos}</ul>
        </div>
            );
    }
}

function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
    };
}

export default connect(mapStateToProps, { addTodo, removeTodo, updateTodo })(TodoList);