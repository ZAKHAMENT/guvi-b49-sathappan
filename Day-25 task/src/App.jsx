import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList'; // Import the child component

function App() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all'); // Added filterStatus state
  const [editedIndex, setEditedIndex] = useState(-1); // Index of the currently edited task

  const addTodo = () => {
    if (taskName.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }
    const newTodo = {
      taskName,
      description,
      status,
    };
    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

  const startEdit = (index) => {
    setEditedIndex(index);
    setTaskName(todos[index].taskName);
    setDescription(todos[index].description);
  };

  const cancelEdit = () => {
    setEditedIndex(-1);
    setTaskName('');
    setDescription('');
  };

  const saveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].taskName = taskName;
    updatedTodos[index].description = description;
    setTodos(updatedTodos);
    setEditedIndex(-1);
    setTaskName('');
    setDescription('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const changeStatus = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
  };

  const filterTodos = (selectedStatus) => {
    if (selectedStatus === 'all') {
      return todos;
    } else {
      return todos.filter((todo) => todo.status === selectedStatus);
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {editedIndex !== -1 ? (
          <>
            <button onClick={() => saveEdit(editedIndex)}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={addTodo}>Add Todo</button>
        )}
      </div>
      <div className="filter">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      {}
      <TodoList
        todos={filterTodos(filterStatus)}
        startEdit={startEdit}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
        editedIndex={editedIndex}
        taskName={taskName}
        description={description}
        setTaskName={setTaskName}
        setDescription={setDescription}
        saveEdit={saveEdit}
      />
    </div>
  );
}

export default App;
