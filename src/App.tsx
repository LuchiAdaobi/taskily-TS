import { useState } from "react";
import "./index.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo('');
  };

  return (
    <div className="app">
      <span className="heading"> Taskily </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
