import React,{useState,useEffect} from "react";
import "../12/app12.css";
import axios from "axios";
function App12(){
   const [users,setUsers] = useState();
   const ProfilData = async()=>{
        const res = await axios.get("https://randomuser.me/api");
        setUsers(res.data.results);
   }
   useEffect(()=>{
    ProfilData();
   },[])
    return(
    <div className="App">
        
        <button onClick={ProfilData}>Click</button>

    </div>
   ) 
}

export default App12;