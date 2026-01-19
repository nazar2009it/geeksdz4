import { useState } from "react";

export default function Quiz({ question, answers, correctIndex }) {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerClick = (index) => {
    if (index === correctIndex) {
      setIsCorrect(true);
    }
  };

  return (
    <div style={{ maxWidth: 400, border: "1px solid #ccc", padding: 16 }}>
      <h2>{question}</h2>

      {answers.map((text, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(index)}
          style={{ display: "block", marginBottom: 8 }}
        >
          {text}
        </button>
      ))}

      {isCorrect && <p>ПРАВИЛЬНО!</p>}
    </div>
  );
}
