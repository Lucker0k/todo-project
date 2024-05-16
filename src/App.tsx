import { ToastContainer } from "react-toastify";
import Todos from "./components/Todos/Todos";
import TopCreateTodo from "./components/TopCreateTodo/TopCreateTodo";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <>
      <TopCreateTodo />
      <Todos />
      <ToastContainer />
    </>
  );
};

export default App;
