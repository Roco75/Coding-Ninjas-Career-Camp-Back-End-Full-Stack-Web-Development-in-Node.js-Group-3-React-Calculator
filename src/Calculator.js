import React, { useState } from 'react';
import './Calculator.css'; // Make sure you create this CSS file as well

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const evaluation = eval(input);
      setResult(evaluation);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} placeholder="0" readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput('%')}>%</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button className="equals" onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('0')} className="zero">0</button>
        <button onClick={() => handleInput('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
