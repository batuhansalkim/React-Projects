import React,{useState} from 'react';
import './App.css';

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal,setMaxVal] = useState(0);
  const [randomNum,setRandomNum] = useState(7);

  const giveRandomNumber=()=>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal +1)));
  }
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number: <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={e=>setMinVal(e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={e=>setMaxVal(e.target.value)}/>
          </div>
        </div>
        <button onClick={giveRandomNumber}>Get random number</button>
      </div>
    </div>
  );
}

export default App;
