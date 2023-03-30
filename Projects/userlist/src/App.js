import './App.css';
import { Info } from './components/info';
import Form from './components/form';
import { useState } from 'react';
function App() {
  // const [info,setInfo] = useState([]);
  const [info,setInfo] = useState([]);
  const [state,setState]  =useState(false);

  return(
    <div className='App'>
      {/* <Form info={info} setInfo={setInfo}/>
      <Info info={info}  /> */}
      <Form info={info} setInfo={setInfo} setState={setState}/>
      <Info info={info} state={state}/>
    </div>
  )
}

export default App;
