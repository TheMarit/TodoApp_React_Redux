import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo, getTodos } from './actionCreators';
import { Route } from 'react-router-dom';
class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    componentDidMount(){
        this.props.getTodos();
    }
    
    handleAdd(val){
       this.props.addTodo(val);
    }
    
    removeTodo(id){
        this.props.removeTodo(id);
    }
    
    updateTodo(id, completed){
        this.props.updateTodo(id, completed);
    }
    
    render(){
        let todos = this.props.todos.map((todo, index) => {
            return <Todo 
                task={todo.task}
                key={todo._id} 
                removeTodo={this.removeTodo.bind(this, todo._id)} 
                updateTodo={this.updateTodo.bind(this, todo._id, todo.completed)}
                completed={todo.completed}
            /> }
            );
        return (
        <div>
           
            <Route path="/todos/new" component={props => (
                <NewTodoForm {...props} handleSubmit={this.handleAdd}/>
            )}/>
            <Route exact path="/todos" component={() => <div><ul>{todos}</ul></div> }/>
        </div>
            );
    }
}

function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
    };
}

export default connect(mapStateToProps, { addTodo, removeTodo, updateTodo, getTodos })(TodoList);