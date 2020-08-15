import React from 'react';

const Todos = ({todos, flag, flag2, deleteTodo, editTodo, onTodoChange}) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <input type="text" value={todo.content} onChange={(e) => { editTodo(todo.id, e.target.value); }} />
        {(flag && todo.id === flag2) ? <span style={{ color: 'red' }} onClick={() => { onTodoChange(todo.id); }}>( Edit )</span> : <span style={{ color: 'black' }} onClick={() => { onTodoChange(todo.id); }}>( Edit )</span>}
        <span onClick={() => { deleteTodo(todo.id); }}> ( Delete )</span>
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
