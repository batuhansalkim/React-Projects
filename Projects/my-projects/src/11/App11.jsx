import React,{useState,useEffect} from "react";
import axios from "axios";
import "../11/app11.css";

function App11(){

    const [profileName, setProfileName] = useState("");
    const [profileCell,setProfileCell] = useState("");
    const [profileImage,setProfileImage] = useState("");
    const [profileEmail,setProfileEmail] = useState("");

    const profileData = async()=>{
        try{
            const res = await axios.get("https://randomuser.me/api");
            
            setProfileCell(`${res.data.results[0].location.country} | ${res.data.results[0].location.city}`);
            setProfileEmail(res.data.results[0].email);
            setProfileImage(res.data.results[0].picture.large);
            setProfileName(`${res.data.results[0].name.first} | ${res.data.results[0].name.last}`);

        }catch(error){
            console.log("error");
        }
    }

    return(
        <div className="App11">
            <div className="profileContainer">
                <img src={profileImage} alt="" />
                <h1>{profileName}</h1>
                <p>{profileEmail}</p>
                <p>{profileCell}</p>
                <button onClick={profileData}>Clik for new Porfile</button>
            </div>
            
        </div>
    )
}

export default App11;