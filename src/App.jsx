import Counter from "./Counter";
import FilteredList from "./FilteredList";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial", display: "grid", gap: 16 }}>
      <Counter />
      <FilteredList />
    </div>
  );
}
