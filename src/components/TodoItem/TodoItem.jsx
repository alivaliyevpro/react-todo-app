import React, { useState } from "react";
import DeleteIcon from "../../images/icon-cross.svg";
import CheckIcon from "../../images/icon-check.svg";

const TodoItem = ({ todo, todos, setTodos }) => {
  

  const [mutableTodo, setMutableTodo] = useState(todo);

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed });

    const updatedTodos = todos.map(item =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = () => {
    const UpdatedList = todos.filter(item => item.id !== todo.id);
    setTodos(UpdatedList);
  };

  return (
    <article
      key={todo.id}
      className="todo">
      <button
        onClick={toggleCompleted}
        className={`checkbox ${todo.completed}`}>
        <img
          src={CheckIcon}
          alt="CheckIcon"
        />
      </button>
      <div className="flex">
        <p className={`${todo.completed}`}>{todo.task}</p>

        <button
          onClick={deleteTodo}
          className="delete-btn">
          <img
            id="delete"
            src={DeleteIcon}
            alt="delete"
          />
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
