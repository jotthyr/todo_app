import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
 
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ],
    flipflag: false,
    flipflag1: false
 
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos,     
    })
  }
  
  editTodo = (id, content) =>{
    
    if(this.state.flipflag1 ===  true){
    this.setState({
      flipflag: !this.state.flipflag
    })
    if(this.state.flipflag ===  true){
      const todos = this.state.todos.map(todo => {
      if (todo.id === id){
        return {id: id, content: content}
      }else{
        return {id: todo.id, content: todo.content}
      }
    })
    this.setState({
      todos,
    })
  }
  }
  }
  
  onTodoChange = () =>{
    
    console.log(this.state.flipflag1)
    this.setState({
      flipflag1: !this.state.flipflag1
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} flag={this.state.flipflag} deleteTodo={this.deleteTodo} editTodo={this.editTodo} onTodoChange={this.onTodoChange}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>  
    );
  }
}

export default App;
