import { useState } from 'react';

const Calculator = () => {
    const BACKEND_URL = 'http://localhost:5000/api/v1/';

    const[ calc, setCalc] = useState("");
    const[ res, setRes ] = useState("");
  
    const operations = ['/', '*', '+','-,','.'];
  
    const updateCalc= value =>{
      if(operations.includes(value) && calc === ''||operations.includes(value) && operations.includes(calc.slice(-1))
      ){
        return;
      }
  
      setCalc(calc + value);
      if (!operations.includes(value)){
        setRes(eval(calc + value).toString());
      }
    }
  
    const createDigits = ()=>{
      const digits = [];
      for(let i = 1; i < 10; i++){
        digits.push(
          <button onClick = {() => updateCalc(i.toString())} key = {i} > {i} </button>
        )
      }
      return digits;
    }
    const calculate = () => {
      setCalc(eval(calc).toString());
    }
    const deleteLast = () => {
      if(calc == ''){
        return;
      }
      const value = calc.slice(0,-1);
      setCalc(value);
    }
    
  return (
    <div className="calculator">
      <div className="display">
        {res ? <span>{res}</span> : ""} &nbsp;
        {calc || "0"}
      </div>
      <div className="operators">
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>

        <button onClick={deleteLast}>DEL</button>
      </div>

      <div className="digits" data-cy="digits-div">
        {createDigits()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate} data-cy='calc-btn' >=</button>
      </div>
    </div>
  );
};

export default Calculator;
