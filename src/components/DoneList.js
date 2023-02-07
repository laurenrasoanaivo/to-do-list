import "./../App.css";
import ListItems from "./ListItems";

function DoneList({ doneList }) {
  return (
    <div className="done" data-testId="done">
      <h1>Done</h1>
      <div className="doneList">
          {doneList!==[] && doneList.map((done, index) => (
            <ListItems index={index} item={done} />
          ))}
      </div>
    </div>
  );
}

export default DoneList;
