import React, { useState } from 'react';
import './ArithmeticTable.css';

const ArithmeticTable = ({ operation }) => {
  const generateRandomNumber = () => Math.floor(Math.random() * 10);

  const [num1, setNum1] = useState(generateRandomNumber());
  const [num2, setNum2] = useState(generateRandomNumber());
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const calculateResult = (num1, num2, operation) => {
    switch (operation) {
      case 'addition':
        return num1 + num2;
      case 'subtraction':
        return num1 - num2;
      case 'multiplication':
        return num1 * num2;
      case 'division':
        return num2 !== 0 ? (num1 / num2).toFixed(2) : 'undefined';
      default:
        return null;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    const result = calculateResult(num1, num2, operation);
    if (parseFloat(value) === parseFloat(result)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const refreshNumbers = () => {
    setNum1(generateRandomNumber());
    setNum2(generateRandomNumber());
    setUserInput('');
    setIsCorrect(null);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{num1}</td>
            <td>{operation === 'addition' ? '+' : operation === 'subtraction' ? '-' : operation === 'multiplication' ? '×' : '÷'}</td>
            <td>{num2}</td>
            <td>=</td>
            <td>
              <input
                type="number"
                value={userInput}
                onChange={handleInputChange}
                style={{
                  backgroundColor: isCorrect === null ? 'white' : isCorrect ? 'lightgreen' : 'lightcoral',
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={refreshNumbers}>New Numbers</button>
    </div>
  );
};

export default ArithmeticTable;
