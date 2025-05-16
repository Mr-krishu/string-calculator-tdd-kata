import React, { useState } from 'react';
import { add } from '../utils/Calculator';
import './StringCalculator.css';

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="calculator-container">
      <h2>String Calculator</h2>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="calculator-input"
      />
      <button onClick={handleCalculate} className="calculator-button">
        Calculate
      </button>
      {result !== null && <p>Sum: {result}</p>}
      {error && <p className="calculator-error">{error}</p>}
    </div>
  );
}

export default StringCalculator;
