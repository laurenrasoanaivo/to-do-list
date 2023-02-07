import "./../App.css";

export default function Input({ setSomeInput, toDo, someInput }) {
  return (
    <div data-testid="input-1">
      <input
        type="text"
        onChange={(e) => setSomeInput(e.target.value)}
        value={someInput}
        onKeyDown={(e) => e.key === "Enter" && toDo()}
        placeholder="Some to do"
      />
    </div>
  );
}
