export interface ITodos {
  id: string;
  text: string;
  status: boolean;
}

export interface ITodoFunc {
  handleDoneTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export interface IState {
  todos: ITodos[];
  loading: boolean;
  error: string;
}
