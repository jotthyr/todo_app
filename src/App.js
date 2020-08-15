import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
 
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ],
    flipflag1: false,
    flipflag2: false
 
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
  
  onTodoChange = (id) =>{
    this.setState({
      flipflag2: id
    })
    console.log(id)
    this.setState({
      flipflag1: !this.state.flipflag1
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} flag={this.state.flipflag1} flag2={this.state.flipflag2} deleteTodo={this.deleteTodo} editTodo={this.editTodo} onTodoChange={this.onTodoChange}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>  
    );
  }
}

export default App;
