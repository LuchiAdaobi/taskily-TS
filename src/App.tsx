import {useState} from "react";
import './index.css'
import InputField from "./components/InputField";
import { Todo } from "./model";

const[todo, setTodo] = useState<string>('')
// const[todos, setTodos] = useState<Todo[]>([])

const App: React.FC = () => {

    console.log(todo)

    return (
        <div className="app">
           <span className="heading">Taskily</span> 
           <InputField todo={todo} setTodo={setTodo}/>
        </div>
    )
}

export default App