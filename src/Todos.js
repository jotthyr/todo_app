import React from 'react'

const Todos = ({todos, flag, deleteTodo, editTodo}) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
              <div className="collection-item" key={todo.id}>
                  <span>{todo.content}</span>
                  {flag ? <span style={{color: "red"}} onClick={() => {editTodo(todo.id)}}>( E )</span> : <span onClick={() => {editTodo(todo.id)}}>( E )</span>}
                  <span onClick={() => {deleteTodo(todo.id)}}> ( X )</span>
              </div>  
            )
        })
    ) : (
        <p className="center">You have no todo's left, yay!</p>
    )

    return (
        <div className="todos collection">
         {todoList}
        </div>
    )
}

export default Todos