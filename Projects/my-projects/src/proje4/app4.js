import {useState} from "react";
import "../proje4/app4.css";

export const App4=()=>{
    // const [alintiSoz,funAlintiSoz] = useState("");
    // const alintiSozGetir=()=>{
    //     fetch("https://type.fit/api/quotes").then((res)=>res.json()).then((data)=>{
    //         let randomNum = Math.floor(Math.random()* data.length);
    //         funAlintiSoz(data[randomNum]);
    //     });
    
    const [soz,funSoz] = useState("");
    const getirSoz = ()=>{
        fetch("https://type.fit/api/quotes").then((res)=>res.json()).then((data)=>{
            let sayıOlustur = Math.floor(Math.random() * data.length);
            funSoz(data[sayıOlustur]);
        });
    }
    

    return(
        <div className="App4">
            <div className="container1">
                <div className="text">
                    {soz.text}
                </div>
                <div className="author">
                    {soz.author} 
                </div>
                <button onClick={getirSoz}>asds</button>
            </div>
            
            
            
        </div>
    )
}
