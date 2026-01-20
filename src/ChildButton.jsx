import React from "react";

function ChildButton({ onClick, label }) {
  console.log("🔁 ChildButton render");

  return (
    <button onClick={onClick} style={{ padding: "10px 12px" }}>
      {label}
    </button>
  );
}

export default React.memo(ChildButton);
