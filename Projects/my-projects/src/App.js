import React,{useState} from "react";
import "./App.css";

function App(){

  const [minDeger, setMinDeger] =useState(0);
  const [maxDeger, setMaxDeger] =useState(0);
  const [randomDeger, setRandomDeger] =useState();

  function RandomSayiOlustur(){
    setRandomDeger(Math.floor(Math.random()* (maxDeger - minDeger +1)+minDeger));
  }

  return(
    <div className="hero">
      <div className="container">
        <div className="random">
          <p>Random Number : <span>{randomDeger}</span> </p>
        </div>
        <div className="degerler">
          <div className="min">
            <p>Min : <span>{minDeger}</span></p>
            <input type="number" onChange={e=>setMinDeger(e.target.value)}/>
          </div>
          <div className="max">
            <p>Max : <span>{maxDeger}</span> </p>
            <input type="number" onChange={e=>setMaxDeger(e.target.value)} />
          </div>
        </div>
        <button className="btn" onClick={RandomSayiOlustur}>Get Random Number </button>
      </div>
    </div>
  )
} 
export default App;