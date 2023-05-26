import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Thank from "./components/Thank";

function App() {
  const listScores = [1, 2, 3, 4, 5];
  const [isSubmit, setIsSubmit] = useState(false);
  const [score, setScore] = useState();
  return (
    <div className="App">
      <div className="container">
        {!isSubmit ? (
          <Question
            listScores={listScores}
            setIsSubmit={setIsSubmit}
            score={score}
            setScore={setScore}
          />
        ) : (
          <Thank listScores={listScores} score={score} />
        )}
      </div>
    </div>
  );
}

export default App;
