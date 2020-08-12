import React from 'react';

const Todos = ({todos, deleteTodo, editTodo, onTodoChange}) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <input type="text" value={todo.content} onChange={(e) => { editTodo(todo.id, e.target.value); }} />
        <span style={{ color: 'red' }} onClick={() => { onTodoChange(); }}>( E )</span>
        <span onClick={() => { deleteTodo(todo.id); }}> ( X )</span>
      </div>
    ))
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
};

export default Todos;
