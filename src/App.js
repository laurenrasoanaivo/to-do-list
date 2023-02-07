import { useState } from "react";
import "./App.css";
import DoneList from "./components/DoneList";
import ToDoList from "./components/ToDoList";

function App() {
  const [doneList, setDoneList] = useState([]);

  return (
    <div className="App">
      <ToDoList setDoneList={setDoneList} />
      <DoneList doneList={doneList} />
    </div>
  );
}

export default App;
