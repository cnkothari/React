/**The component imports React and the useState hook from the React library. The useState hook is used to manage the component's state
  The component defines two pieces of state using the useState hook:
   input: A string that holds the current input expression (e.g., "1+2").
  result: A string that holds the result of the evaluated 
 
 */
import React, { useState } from 'react';
import { create, all } from 'mathjs';

const math = create(all);

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
 
  /** The handleButtonClick function is called when a number or operator button is clicked. It appends the clicked value to the input state.
     For example, if the user clicks "2", the input state will be updated to "2", and if they then click "+", it will update to "2+".
 */
  const handleButtonClick = (value) => {
    setInput(input + value);
  };
   /** The handleClear function resets both the input and result states to empty strings. This is called when the "C" button is clicked.
 */
  const handleClear = () => {
    setInput('');
    setResult('');
  };
 /** The handleCalculate function is called when the "=" button is clicked. It attempts to   evaluate the expression stored in the input state using the eval() function.
    If the evaluation is successful, the result is stored in the result state. If there is an error (e.g., invalid input), it catches the error and sets the result state to "Error".
   Note: Using eval() can be dangerous if the input is not controlled, as it can execute arbitrary code. In a production application, you should consider using a safer alternative for evaluating mathematical expressions.
 */
  const handleCalculate = () => {
    try {
      // Use mathjs to evaluate the expression
      setResult(math.evaluate(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };
/** The component renders a simple calculator interface:
A header with the title "Calculator".
A display area that shows the current input and the result.
A grid of buttons for digits (0-9), basic arithmetic operations (+, -, *, /), a clear button (C), and an equals button (=).
Each button has an onClick event handler that calls the appropriate function when clicked.
 */
  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">
        <div>{input || '0'}</div>
        <div>{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;