import { useState } from "react";
import "./TodoForm.css";

// eslint-disable-next-line react/prop-types
function TodoForm({ setTodoArr }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("23/03/24");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <form className="TodoForm">
      <label className="input input-bordered input-secondary flex items-center gap-2">
        Name
        <input
          type="text"
          name=""
          className="grow"
          id=""
          defaultValue={todoName}
          onChange={(e) => {
            setErrorMsg("");
            setTodoName(e.target.value);
          }}
        />
      </label>

      <span className="danger">{errorMsg}</span>

      <label className="input input-bordered input-secondary flex items-center gap-2">
        Date
        <input
          type="date"
          className="grow"
          name=""
          id=""
          defaultValue={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
      </label>
      <input
        type="button"
        value="Submit"
        className="btn btn-active btn-primary"
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
