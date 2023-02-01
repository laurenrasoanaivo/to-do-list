import { useState } from "react";
import "./../App.css";

function ToDoList() {
  const [someInput, setSomeInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const toDo = () => {
    setToDoList((e) => [...e, someInput]);
    setSomeInput("");
  };

  const done = (e, i) => {
    e.preventDefault();
    setDoneList((e) => [...e, toDoList[i]]);
    let t = toDoList.slice();
    t.splice(i, 1);
    setToDoList(t.slice());
  };

  return (
    <div className="toDoList">
      <div className="toDo">
        <h1>To Do</h1>
        <div>
          <div className="form">
            <p>Some to do</p>
            <input
              type="text"
              onChange={(e) => setSomeInput(e.target.value)}
              value={someInput}
              onKeyDown={(e) => e.key === "Enter" && someInput !== "" && toDo()}
              placeholder="to do"
            />
            <br></br>
            <br></br>
          </div>
          <div>
            <ul>
              {toDoList.map((e, i) => (
                <li key={i}>
                  <input onClick={(e) => done(e, i)} type="checkbox" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="done">
        <h1>Done</h1>
        <div className="doneList">
          <ul>
            {doneList.map((done, index) => (
              <li key={index}>{done}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
