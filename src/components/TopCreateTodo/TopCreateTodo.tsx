import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  addTodo,
  deleteAllTodos,
  filterStatus,
} from "../../store/features/todoSlice";
import { errorToastText } from "../../helpers/errorToastText";
import "./style.css";

const TopCreateTodo = () => {
  const [valueText, setValueText] = useState<string>("");
  const { todos } = useAppSelector((item) => item.allTodos);
  const dispatch = useAppDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueText(e.target.value);
  };

  const handleCreateTodo = () => {
    if (valueText == "") {
      return errorToastText("Введите задачу");
    }
    if (valueText.length < 3) {
      return errorToastText("Задача слишком короткая");
    }

    dispatch(addTodo(valueText.trim()));
    setValueText("");
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  const handleFilterTodos = (buttonText: string) => {
    dispatch(filterStatus(buttonText));
  };

  return (
    <section className="topBar">
      <div className="container">
        <div className="top__row">
          <button className="top__btn" onClick={() => handleFilterTodos("all")}>
            All
          </button>
          <button
            className="top__btn"
            onClick={() => handleFilterTodos("active")}
          >
            Active
          </button>
          <button
            className="top__btn"
            onClick={() => handleFilterTodos("completed")}
          >
            Completed
          </button>
          <input
            className="top__input"
            onChange={(e) => handleChangeInput(e)}
            value={valueText}
            placeholder="Добавьте задачу"
          />
          <button className="top__btn" onClick={() => handleCreateTodo()}>
            Add todo
          </button>
          {todos.length > 0 ? (
            <button className="top__btn" onClick={() => handleDeleteAll()}>
              Delete all
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCreateTodo;
