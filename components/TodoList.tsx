import type { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleRemoveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleRemoveTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;