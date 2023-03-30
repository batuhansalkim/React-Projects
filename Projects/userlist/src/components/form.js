import React ,{ useEffect, useState } from "react";
import axios from "axios";

export default function Form(){
    const [city,setCity] = useState("");
    useEffect(()=>console.log(city),[city]);

    function handleChange(){
        const api = "bcba67d5ce37d5c286855ac5d35a367e";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
        axios(baseURL).then(data=>console.log(data));
    }
    return(
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={(e)=>{e.preventDefault(); handleChange()}}>
                <div className="form">
                    <input onChange={(e)=>setCity(e.target.value)} type="text" className="inputText" placeholder="Şehri Giriniz" />
                </div>
                <div className="btnDiv">
                    <button className="btn" type="submit">Verileri Getir</button>
                </div>
            </form>
        </div>
    )
}