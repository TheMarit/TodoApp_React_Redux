import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './actionCreators';
import { Route } from 'react-router-dom';
class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
   handleAdd(val){
       this.props.addTodo(val);
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

export default connect(mapStateToProps, { addTodo, removeTodo, updateTodo })(TodoList);