import Images from "./image";
import React,{useState} from "react";
import "../proje2/proje2.css";


export const App2 =()=>{
    const [selectedImg, setSelectedImg] = useState(Images[0]);
    return(
        <div className="App2">
            <div className="container">
                <img src={selectedImg} alt="selected" className="selected" />
            </div>
            <div className="imgContainer">
                {/* {Images.map((img,index)=>(
                    <img key={index} src={img} alt="tantuni" onClick={()=> setSelectedImg(img)}/>
                ))} */}
                {Images.map((img)=>(
                    <img src={img} alt="tantuni" onClick={()=>setSelectedImg(img
                        )}/>
                ))}
            </div>
        </div>
    );
    
}