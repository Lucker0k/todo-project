import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addTodo } from "../../store/features/todoSlice";
import { errorToastText } from "../../helpers/errorToastText";
import "./style.css";

const TopCreateTodo = () => {
  const [valueText, setValueText] = useState<string>("");
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

  return (
    <section className="topBar">
      <div className="container">
        <div className="top__row">
          <input
            className="top__input"
            onChange={(e) => handleChangeInput(e)}
            value={valueText}
            placeholder="Добавьте задачу"
          />
          <button className="top__btn" onClick={() => handleCreateTodo()}>
            Add todo
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCreateTodo;
