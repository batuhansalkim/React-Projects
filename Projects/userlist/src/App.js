import React,{useEffect,useState} from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
function App(){
  const [show,setShow] = useState(true);

  const [cart,setCart] = useState([]);

  function handleClick(item){
    if(cart.indexOf(item)!==-1) return;
    setCart([...cart,item]);
  }
  function handleChange(item,d){

  }
  return(
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length}/>
      {show ? <Amazon handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
    </React.Fragment>
  )
}
export default App;