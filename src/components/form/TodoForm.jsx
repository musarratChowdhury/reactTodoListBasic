import { useState } from "react";
import "./TodoForm.css";

// eslint-disable-next-line react/prop-types
function TodoForm({ setTodoArr }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("23/03/24");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <form className="TodoForm">
      <input
        type="text"
        name=""
        id=""
        defaultValue={todoName}
        onChange={(e) => {
          setErrorMsg("");
          setTodoName(e.target.value);
        }}
      />
      <span className="danger">{errorMsg}</span>
      <input
        type="text"
        name=""
        id=""
        defaultValue={todoDate}
        onChange={(e) => setTodoDate(e.target.value)}
      />
      <input
        type="button"
        value="Submit"
        onClick={() => {
          if (todoName == "") {
            setErrorMsg("Plz enter a name");
            return;
          }
          setTodoArr((currArr) => [
            ...currArr,
            {
              title: todoName,
              date: todoDate,
              sl: currArr.length + 1,
            },
          ]);
        }}
      />
    </form>
  );
}

export default TodoForm;
