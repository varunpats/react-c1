import { useState } from 'react';
import './App.css';

function App() {
  const [res, setRes] = useState("");
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [result, setResult] = useState(false);

  const checkInput = (event) => {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const op = event.target.name;
    num1.trim();
    num2.trim();
    if (!num1 || isNaN(num1)) {
      setFlag2(false)
      setResult(false)
      setFlag1(true)
    }
    else if (!num2 || isNaN(num2)) {
      setFlag1(false)
      setResult(false)
      setFlag2(true)
    }
    else {
      setFlag1(false)
      setFlag2(false)
      calculate(Number(num1), Number(num2), op)
    }
  }

  const calculate = (n1, n2, op) => {
    let res = 0;
    setResult(true);
    switch (op) {
      case "add":
        res = n1 + n2;
        setRes(res)
        break;
      case "sub":
        res = n1 - n2;
        setRes(res)
        break;
      case "mult":
        res = n1 * n2;
        setRes(res)
        break;
      case "div":
        res = n1 / n2;
        setRes(res)
        break;
    }
  }

  const Error1 = () => (
    <p className="error">
      Error : Num1 cannot be empty
    </p>
  )

  const Error2 = () => (
    <p className="error">
      Error : Num2 cannot be empty
    </p>
  )

  const Results = () => (
    <div>
      <p className="result">
        Result = {res}
      </p>
      <p className="success">
        Success : Your result is shown above!
      </p>
    </div>
  )

  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" id="num1" placeholder="Num 1" /><br />
      <input type="text" id="num2" placeholder="Num 2" /><br />
      <button name='add' onClick={checkInput}>+</button>
      <button name='sub' onClick={checkInput}>-</button>
      <button name='mult' onClick={checkInput}>*</button>
      <button name='div' onClick={checkInput}>/</button>
      {flag1 ? <Error1 /> : null}
      {flag2 ? <Error2 /> : null}
      {result ? <Results /> : null}
    </div>
  );
}

export default App;
