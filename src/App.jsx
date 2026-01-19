import Quiz from "./Quiz";

export default function App() {
  const question = "Столица Кыргызстана?";
  const answers = ["Ош", "Бишкек", "Токмок", "Нарын"];
  const correctIndex = 1; 

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <Quiz question={question} answers={answers} correctIndex={correctIndex} />
    </div>
  );
}
