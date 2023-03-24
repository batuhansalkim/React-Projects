import React,{useState,useEffect} from "react";
import "../12/app12.css";
import axios from "axios";
function App12(){
   const [users,setUsers] = useState();
   const ProfilData = async()=>{
        const res = await axios.get("https://randomuser.me/api");
        console.log(res);
        setUsers(res.data.results[0]);
   }
   
    return(
    <div className="App" >
        <div className="profileContainer">
            <img src={users.picture.large} alt="" />
        </div>
        <button onClick={ProfilData}>click</button>
    </div>
   ) 
}

export default App12;