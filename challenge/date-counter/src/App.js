import { useState } from "react";
export default function App() {
  return <Count />;
}

function Count() {
  const style = {
    display: "flex",
    margin: "100px",
    alignItem: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    gap: "30px",
    maxWidth: "100%",
  };
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const dates = new Date();
  dates.setDate(dates.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <div className="count" style={style}>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />

          <span>Step: {step}</span>
        </div>
        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <input
            type="number"
            onChange={(e) => setCount(e.target.value)}
            value={count}
          />

          <button onClick={() => setCount((c) => c + Number(step))}>+</button>
        </div>
        <p>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `${count} from today is `}
          {dates.toDateString()}
        </p>
      </div>
      {count === 0 && step === 1 ? (
        ""
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}
