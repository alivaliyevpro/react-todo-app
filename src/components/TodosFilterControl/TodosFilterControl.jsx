import React, { useEffect, useRef, useState } from "react";

const TodosFilterControl = ({ todos, setTodos, setFilteredTodos }) => {
  const [activeBtn, setActiveBtn] = useState("");

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, [todos]);

  const todosLeft = todos.filter(todo => !todo.completed).length;

  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = todos.filter(todo => !todo.completed).length;

  const handleFilter = category => {
    if (category === "Active") {
      setFilteredTodos(todos.filter(todo => !todo.completed));
      setActiveBtn("active");
    } else if (category === "Completed") {
      setFilteredTodos(todos.filter(todo => todo.completed));
      setActiveBtn("completed");
    } else {
      setFilteredTodos(todos);
      setActiveBtn("all");
    }
  };

  const handleClear = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <>
      <div className="controls-container">
        <span>
          {todosLeft > 1 ? `${todosLeft} items left` : `${todosLeft} item left`}
        </span>
        <div className="controls">
          <button
            className={activeBtn === "all" ? "all" : ""}
            ref={buttonRef}
            onClick={() => handleFilter("All")}>
            All
          </button>
          <button
            disabled={activeTodos < 1}
            className={activeBtn === "active" ? "active" : ""}
            onClick={() => handleFilter("Active")}>
            Active
          </button>
          <button
            disabled={completedTodos < 1}
            className={activeBtn === "completed" ? "completed" : ""}
            onClick={() => handleFilter("Completed")}>
            Completed
          </button>
        </div>
        <button
          onClick={() => handleClear()}
          className="clear">
          Clear Completed
        </button>
      </div>

      {/*  controls for mobile */}

      <div className="controls-mobile">
        <button
          className={activeBtn === "all" ? "all" : ""}
          ref={buttonRef}
          onClick={() => handleFilter("All")}>
          All
        </button>
        <button
          disabled={activeTodos < 1}
          className={activeBtn === "active" ? "active" : ""}
          onClick={() => handleFilter("Active")}>
          Active
        </button>
        <button
          disabled={completedTodos < 1}
          className={activeBtn === "completed" ? "completed" : ""}
          onClick={() => handleFilter("Completed")}>
          Completed
        </button>
      </div>
    </>
  );
};

export default TodosFilterControl;
