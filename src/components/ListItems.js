import "./../App.css";

export default function ListItems({ index, item }) {
  return (
    <li data-testId="list-item" key={index}>
      {item}
    </li>
  );
}
