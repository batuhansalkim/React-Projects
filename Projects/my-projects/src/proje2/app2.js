import React ,{useState} from "react";
import Images from  "./image";
import "../proje2/proje2.css";


export const App2 =()=>{
    const [foto,funcSeciliFoto] = useState(Images[0]);

    return(
        <div className="App2">
            <div className="container">
                <img src={foto} alt="" />
            </div>
            <div className="fotolar">
                {
                    Images.map((fotograflar, id)=>(
                        <img style={{cursor:"pointer"}} key={id} src={fotograflar} alt=""  onClick={()=>funcSeciliFoto(fotograflar)}/>
                    ))
                }
                
            </div>
        </div>
    )}
    
