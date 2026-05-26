import type { useState } from 'react';
import TodoList from './TodoList';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    const newTodo = [...TodoList.useMemo().todos, inputValue];
    setInputValue('');
    localStorage.setItem('todos', JSON.stringify(newTodo));
    TodoList.useMemo().setTodos(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;