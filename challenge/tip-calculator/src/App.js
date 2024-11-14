import { useState } from "react";

export default function App() {
  return <Tip />;
}

function Tip() {
  const [bill, setBill] = useState(0);
  const [selected, setSelected] = useState(0);
  const [fselected, setFSelected] = useState(0);

  const tip = bill * ((selected + fselected) / 2 / 100);
  function handleReset() {
    setBill(0);
    setFSelected(0);
    setSelected(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill}></Bill>

      <Option selected={selected} setSelected={setSelected}>
        How did you like it
      </Option>
      <Option selected={fselected} setSelected={setFSelected}>
        How did your friend like it
      </Option>
      {bill === 0 && tip === 0 ? null : (
        <>
          <Total bill={bill} tip={tip}></Total>
          <Reset onhandleReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}

function Bill({ setBill, bill }) {
  return (
    <div>
      <span>
        How much was the Bill?
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>
      </span>
    </div>
  );
}
function Option({ children, selected, setSelected }) {
  return (
    <div>
      {children}
      <select
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Total({ bill, tip }) {
  const total = Number(bill) + Number(tip);
  return (
    <div>
      <h3>
        Your Pay ${total} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
function Reset({ onhandleReset }) {
  return (
    <div>
      <button onClick={onhandleReset}>Reset</button>
    </div>
  );
}
