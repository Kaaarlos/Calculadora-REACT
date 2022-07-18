import './App.css';
import logo from '../src/img/red.png'
import Button from './components/Buttons';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import {useState} from 'react';
import React from 'react';
import {evaluate} from 'mathjs';

function App() {


  const [input,setInput] = useState('');

  const handleInput = val =>{
    setInput(input + val)
  };

  const calculateResult = ()=>{
    if(input){
      setInput(evaluate(input))
    } else{
      alert('Ingresa valores')
    }
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Logo de la calculadora' />
      </div>
      <div className='contenedor-calculadora'>

        <Screen input={input}/>

        <div className='fila'>
          <Button handleClick={handleInput}>1</Button>
          <Button handleClick={handleInput}>2</Button>
          <Button handleClick={handleInput}>3</Button>
          <Button handleClick={handleInput}>+</Button>
        </div>

        <div className='fila'>
          <Button handleClick={handleInput}>4</Button>
          <Button handleClick={handleInput}>5</Button>
          <Button handleClick={handleInput}>6</Button>
          <Button handleClick={handleInput}>-</Button>
        </div>
        
        <div className='fila'>
          <Button handleClick={handleInput}>7</Button>
          <Button handleClick={handleInput}>8</Button>
          <Button handleClick={handleInput}>9</Button>
          <Button handleClick={handleInput}>*</Button>
        </div>
        
        <div className='fila'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={handleInput}>0</Button>
          <Button handleClick={handleInput}>.</Button>
          <Button handleClick={handleInput}>/</Button>
        </div>
        
        <div className='fila'>
          <ClearButton handleClear={() =>setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
