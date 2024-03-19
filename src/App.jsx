import { useState } from "react";
import myimg from "./assets/images/192.png";
import "./App.css";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/list/TodoList";

function App() {
  const [todoArr, setTodoArr] = useState([
    { title: "need to dry clothes", date: "2/3/24", sl: 1 },
    { title: "need to wash dish", date: "2/3/24", sl: 2 },
  ]);
  return (
    <>
      <img src={myimg}></img>
      <TodoForm setTodoArr={setTodoArr} />
      <TodoList todoList={todoArr} />
      <button className="btn">Hello daisyUI</button>
    </>
  );
}

export default App;
