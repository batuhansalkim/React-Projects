import React,{useState} from 'react';
import './App.css';

function App() {
  const [maxVal,setMaxVal] = useState(0);
  const [minVal,setMinVal] = useState(0);
  const [randomNumber, setRandomNumber] = useState(5);

  const generateRandomNumber=()=>{
    setRandomNumber(Math.floor(Math.random()* (maxVal-minVal+1)+minVal))
  }
  
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number: <span>{randomNumber}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min: {minVal}</p>
            <input type="number" onChange={e=>setMinVal(e.target.value)} />
          </div>
          <div>
            <p>Max: {maxVal}</p>
            <input type="number" onChange={e=>setMaxVal(e.target.value)}/>
          </div>
        </div>
        <button onClick={generateRandomNumber}>Get random number</button>
      </div>
    </div>
  );
}

export default App;
