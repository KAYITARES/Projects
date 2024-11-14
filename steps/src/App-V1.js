import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <StepMessage step={step}>{messages[step - 1]}</StepMessage>

            <div className="buttons">
              <Button bgColor="#7950fe" color="#fff" onClick={handlePrevious}>
                👉 Previous
              </Button>
              <Button bgColor="#7950fe" color="#fff" onClick={handleNext}>
                Next 👈
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
function Button({ bgColor, color, onClick, children }) {
  return (
    <div className="buttons">
      <button style={{ background: bgColor, color: color }} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
