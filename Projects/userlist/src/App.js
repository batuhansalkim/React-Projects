import React,{useEffect,useState} from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
function App(){
  return(
    <React.Fragment>
      <Navbar/>
      <Amazon/>
    </React.Fragment>
  )
}
export default App;