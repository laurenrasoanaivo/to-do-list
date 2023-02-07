import { useState } from "react";
import "./../App.css";
import Input from "./Input";
import ListItems from "./ListItems";

function ToDoList({ setDoneList }) {
  const [someInput, setSomeInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const toDo = () => {
    someInput !== "" && setToDoList((e) => [...e, someInput]);
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
    <div className="toDo">
      <h1>To Do</h1>
      <div>
        <div className="form">
          <p>Some to do</p>
          <Input
            toDo={toDo}
            setSomeInput={setSomeInput}
            someInput={someInput}
          />
          <br></br>
          <br></br>
        </div>
        <div>
            {toDoList.map((e, i) => (
              <>
                <input name="checkbox" onClick={(e) => done(e, i)} type="checkbox" role="checkbox" />
                <ListItems index={i} item={e} />
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
