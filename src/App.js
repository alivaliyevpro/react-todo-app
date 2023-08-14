import React, { useEffect, useState } from "react";

import "./styles/style.css";
import Header from "./components/Header/Header";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodosFilterControl from "./components/TodosFilterControl/TodosFilterControl";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") || true)
  );

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, task: "Start adding your todos 👻", completed: false },
    ]
  );
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [todos, darkMode]);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <main>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <TodoInput
          todos={todos}
          setTodos={setTodos}
        />

        <TodoList
          todos={todos}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
        />
        <TodosFilterControl
          todos={todos}
          setTodos={setTodos}
          setFilteredTodos={setFilteredTodos}
          filteredTodos={filteredTodos}
        />
      </main>
    </div>
  );
}

export default App;
