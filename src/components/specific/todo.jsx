import React from "react";
import styled from 'styled-components';

const TodoHolder =  styled.div`
display:flex;
margin:auto;

p,button{
  margin:25px;
  text-align:center;
}
`
const TodoListHolder =  styled.div`
max-width:300px;
`

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  function Todo({ todo, index, completeTodo }) {
    return (
      <TodoHolder
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <p>{todo.text}</p>
          <button onClick={() => completeTodo(index)}>Complete</button>
      </TodoHolder>
    );
  }
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoListHolder>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </TodoListHolder>
    </div>
  )
}

export default TodoList;