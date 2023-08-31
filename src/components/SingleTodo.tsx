import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo= ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todo-single">
      <span className="todo-single-text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdOutlineDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
