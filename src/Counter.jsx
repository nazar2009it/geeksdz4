import { useCallback, useState } from "react";
import ChildButton from "./ChildButton";

export default function Counter() {
  console.log("🔁 Counter render");
  const [count, setCount] = useState(0);


  const handleClick = useCallback(() => {
    console.log("✅ handleClick called");
    setCount((c) => c + 1);
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 12 }}>
      <h2>Counter: {count}</h2>

      <ChildButton onClick={handleClick} label="Increase" />
    </div>
  );
}
