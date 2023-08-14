import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, filteredTodos, setTodos }) => {
  return (
    <div className="todos-container">
      <div className="todos">
        {filteredTodos.map((todo, index) => {
          return (
            <div key={index}>
              <TodoItem
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            </div>
          );
        })}

        {todos.length < 1 && (
          <div className="empty-list">
            <p>There's no task 🦩</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
