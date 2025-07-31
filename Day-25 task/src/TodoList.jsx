import React from 'react';

function TodoList({
  todos,
  startEdit,
  deleteTodo,
  changeStatus,
  editedIndex,
  taskName,
  description,
  setTaskName,
  setDescription,
  saveEdit,
}) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div className="todo-card" key={index}>
          <div>
            {index !== editedIndex ? (
              <h3>{todo.taskName}</h3>
            ) : (
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            )}
          </div>
          <div>
            {index !== editedIndex ? (
              <p>{todo.description}</p>
            ) : (
              <input
                type="text1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            )}
          </div>
          <p>Status: {todo.status}</p>
          {index !== editedIndex ? (
            <button onClick={() => startEdit(index)}>Edit</button>
          ) : (
            <button onClick={() => saveEdit(index)}>Save</button>
          )}
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <select
            value={todo.status}
            onChange={(e) => changeStatus(index, e.target.value)}
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
