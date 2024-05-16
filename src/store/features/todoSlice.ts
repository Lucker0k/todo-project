import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IState } from "../../interface";

const initialState: IState = {
  todos: [],
  loading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        status: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      const todoStatus = state.todos.find((todo) => todo.id === action.payload);

      if (todoStatus === undefined) return;

      todoStatus.status = !todoStatus.status;
    },
    changeTextTodo: (state, action) => {
      const { id, textInput } = action.payload;
      const changedTodo = state.todos.find((todo) => todo.id === id);

      if (changedTodo === undefined) return;

      changedTodo.text = textInput;
    },
  },
});

export const { addTodo, deleteTodo, changeStatus, changeTextTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
