import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Todo from "../Todo/Todo";

import { changeStatus, deleteTodo } from "../../store/features/todoSlice";
import { ITodos } from "../../interface";
import "./style.css";

const Todos = () => {
  const [arrayTodo, setArrayTodo] = useState<ITodos[]>([]);

  const { todos } = useAppSelector((item) => item.allTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sortedStatusTodos = todos.slice().sort((a, b) => a.status - b.status);
    setArrayTodo(sortedStatusTodos);
  }, [todos]);

  const handleDoneTodo = (id: string) => {
    dispatch(changeStatus(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <section className="todos">
      <div className="container">
        <div className="listTodos">
          {arrayTodo.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              status={item.status}
              text={item.text}
              handleDoneTodo={handleDoneTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todos;
