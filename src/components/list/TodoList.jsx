/* eslint-disable react/prop-types */
import "./TodoList.css";

function TodoList(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <ul className="todoList">
      {props.todoList.map((item) => (
        <li key={item.sl}>
          {item.sl} - {item.title} - {item.date}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
