import React, { useState } from "react";

const generateId = array => {
  const ids = array.map(item => item.id);

  if (array.length !== 0) {
    return Math.max(...ids) + 1;
  } else {
    return 1;
  }
};

const TodoInput = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = e => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let WordLengthLimitChecker = todoInput
      .split(" ")
      .map(word => (word.length < 30 ? false : true));

    if (todoInput && !WordLengthLimitChecker.includes(true)) {
      const newTodo = {
        id: generateId(todos),
        task: todoInput.trim(),
        completed: false,
      };

      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };

  return (
    <div className="form-control">
      <button
        id="submitNewTodo"
        type="submit"
        onClick={handleSubmit}></button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoInput;
