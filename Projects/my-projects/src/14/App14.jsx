import React,{useState,useEffect} from "react";
import "../14/app14.css";
import { Header } from "./Header";
import "../14/app14.css";
import MemeGenerator from "./MemeGenerator";

function App14(){
    return(
        <div>
            <Header name="Meme Generator"/>
            <MemeGenerator/>
        </div>
    )
}
export default App14;