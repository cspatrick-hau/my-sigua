import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    let res = 0;

    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide';
        break;
      default:
        res = 'Invalid';
    }

    setResult(res);
  };

  return (
    <div>
      <h2>Calculator</h2>
      
      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />

      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <br />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />

      <button onClick={handleCalculate}>Calculate</button>

      <h3>Result: {result !== null ? result : '---'}</h3>
    </div>
  );
}

export default Calculator;