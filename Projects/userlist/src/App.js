import React,{useEffect,useState} from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
function App(){
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);

  function handleClick(item){
    if(cart.indexOf(item)!==-1) return;
    setCart([...cart,item]);
  }

  return(
    <React.Fragment>
      <Navbar/>
      <Amazon handleClick={handleClick}/>
    </React.Fragment>
  )
}
export default App;