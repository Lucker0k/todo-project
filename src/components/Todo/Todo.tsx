import { useState } from "react";
import { changeTextTodo } from "../../store/features/todoSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { errorToastText } from "../../helpers/errorToastText";

import deleteIcon from "../../assets/icon-delete.svg";
import editPen from "../../assets/icon-editPen.svg";
import crossIcon from "../../assets/icon-cross.svg";
import checkMarkIcon from "../../assets/icon-checkMark.svg";
import { ITodoFunc, ITodos } from "../../interface";
import "./style.css";

const Todo = ({
  id,
  status,
  text,
  handleDoneTodo,
  handleDeleteTodo,
}: ITodos & ITodoFunc) => {
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [valueText, setValueText] = useState(text);

  const dispatch = useAppDispatch();

  const handleOpenTodoOnChange = () => {
    if (status === true) {
      return errorToastText("Выполненные задачи нельзя редактировать");
    }
    if (status === false) setIsEditingTodo(!isEditingTodo);
  };

  const handleChangeTodo = () => {
    if (valueText === "") {
      return errorToastText("Поле не должно быть пустым");
    }
    if (valueText.length < 3) {
      return errorToastText("Слишком короткая задача");
    }

    dispatch(changeTextTodo({ id, textInput: valueText.trim() }));
    setIsEditingTodo(!isEditingTodo);
  };

  const handleCloseTodo = () => {
    setIsEditingTodo(!isEditingTodo);
  };

  return (
    <div className="listTodos__todo">
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={status}
        onChange={() => handleDoneTodo(id)}
      />

      {isEditingTodo ? (
        <>
          <input
            className={status ? "todo__text todo__done" : "todo__text"}
            value={valueText}
            onChange={(e) => setValueText(e.target.value)}
          />

          <button className="todo__btn" onClick={() => handleChangeTodo()}>
            <img src={checkMarkIcon} alt="#" />
          </button>
          <button className="todo__btn" onClick={() => handleCloseTodo()}>
            <img src={crossIcon} alt="#" />
          </button>
        </>
      ) : (
        <>
          <span className={status ? "todo__text todo__done" : "todo__text"}>
            {text}
          </span>
          <button
            className="todo__btn"
            onClick={() => handleOpenTodoOnChange()}
          >
            <img src={editPen} alt="#" />
          </button>
          <button className="todo__btn" onClick={() => handleDeleteTodo(id)}>
            <img src={deleteIcon} alt="#" />
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
