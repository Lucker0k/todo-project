import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IState } from "../../interface";

const initialState: IState = {
  todos: [],
  filterStatus: "all",
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
    deleteAllTodos: (state) => {
      state.todos = [];
    },
    filterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  changeStatus,
  changeTextTodo,
  deleteAllTodos,
  filterStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
