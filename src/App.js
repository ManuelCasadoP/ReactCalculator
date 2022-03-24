import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const [ secondNumber, setSecondNumber ] = useState("");
  const [ result, setResult ] = useState("");
  const [ history, setHistory] = useState([]);
  const memory = useRef(0);
    
  function changeFirstNumberHandler (event) {
    setFirstNumber(parseFloat(event.target.value));
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber(parseFloat(event.target.value));
  }

  function addHandler (event){
    setResult(parseFloat(firstNumber + secondNumber));  
  }
  
  function subtractHandler (event){
    setResult(parseFloat(firstNumber - secondNumber));    
  }
  
  function multiplyHandler (event){
    setResult(parseFloat(firstNumber * secondNumber));    
  }
  
  function divideHandler (event){
    setResult(parseFloat(firstNumber / secondNumber));    
  }

  function deleteHandler(event){
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }

  function addToMemoryHandler (event){
    memory.current=(parseFloat(memory.current) + parseFloat(result)); 
    
  }

  function memoryRecoverHandler (event){
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
       
  }

  function memoryClearHandler (event){
    memory.current = 0;
 }


  function addNewItemToHistory () {
    const actualHistory = Array.from(history);
    if ({result} === isNaN){  }
    else {   
      actualHistory.push(parseFloat(result));
      setHistory(actualHistory);
    }
  }

  const firstRender = useRef(true);

  useEffect(
    ()=>{
      if (firstRender.current===true){
            firstRender.current=false }
      else {
            addNewItemToHistory();
    }}, [(result)]
  )
  
  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber}  onChange={changeFirstNumberHandler}/>
      <br/>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <br/>
      <button onClick={addHandler}>+</button>
      <button onClick={subtractHandler}>-</button>
      <button onClick={multiplyHandler}>*</button>
      <button onClick={divideHandler}>/</button>
      <button onClick={deleteHandler}>C</button>
      <br/>
      <button onClick={addToMemoryHandler}>M+</button>
      <button onClick={memoryRecoverHandler}>MR</button>
      <button onClick={memoryClearHandler}>MC</button>
      <br/>
      <p>{result}</p>
      
    </>
  );
}

export default App;
