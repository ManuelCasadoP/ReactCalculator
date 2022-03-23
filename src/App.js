import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const [ secondNumber, setSecondNumber ] = useState("");
  const [ result, setResult ] = useState("");
  const [ history, setHistory] = useState([]);
  const memory = useRef("");
    
  function changeFirstNumberHandler (event) {
    setFirstNumber(parseFloat(event.target.value));
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber(parseFloat(event.target.value));
  }

  function addHandler (event){
    setResult(firstNumber + secondNumber);  
  }
  
  function subtractHandler (event){
    setResult(firstNumber - secondNumber);    
  }
  
  function multiplyHandler (event){
    setResult(firstNumber * secondNumber);    
  }
  
  function divideHandler (event){
    setResult(firstNumber / secondNumber);    
  }

  function deleteHandler(event){
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }

  function addToMemoryHandler (event){
    memory.current=(parseFloat(memory.current+result));  
  }

  function memoryRecoverHandler (event){
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
    setFirstNumber(memory.current);    
  }


  function showResult(event){
    console.log("firstNumber state:", firstNumber);
    console.log("secondNumber state:", secondNumber);
    console.log("Result: ",result);
  }

  function addNewItemToHistory () {
    const actualHistory = Array.from(history);
    actualHistory.push(result);
    setHistory(actualHistory);
    
  }

  const firstRender = useRef(true);

  useEffect(
    ()=>{
      if (firstRender===true){
            firstRender=false 
      } else {
            addNewItemToHistory();
    }}, [result]
  )
  
  useEffect(
    ()=>{
      showResult();
        
    }
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
      <br/>
      <p>{result}</p>
      <p>{memory.current}</p>

    </>
  );
}

export default App;
