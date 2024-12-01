import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => (prev > 0 ? prev - 1 : 0)); 
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Compteur</h1>
      <p style={{ fontSize: "24px" }}>{count}</p>
      <button onClick={inc} style={buttonStyle}>
        +
      </button>
      <button onClick={dec} style={buttonStyle}>
        -
      </button>
      <button onClick={reset} style={buttonStyle}>
        Réinitialiser
      </button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Counter;
