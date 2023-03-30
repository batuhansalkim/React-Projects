import React ,{ useEffect, useState } from "react";
import axios from "axios";

export default function Form({setInfo,setState}){
    // const [city,setCity] = useState("");

    // function handleChange(){
    //     const api = "bcba67d5ce37d5c286855ac5d35a367e";
    //     const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
    //     axios(baseURL).then(res=>setInfo(res.data));
    // }
    const [city,setCity] = useState(""); 

    const verileriGetir= async()=>{
        const api = "bcba67d5ce37d5c286855ac5d35a367e";
        const myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
       await axios(myUrl).then(res=>setInfo(res.data));
       
       
    }

    return(
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={(e) => {e.preventDefault(); verileriGetir()} }>
                <div className="form">
                    <input onChange={(e)=>setCity(e.target.value)} type="text" className="inputText" placeholder="Şehri Giriniz" />
                </div>
                <div className="btnDiv"><br />
                    <button className="btn" type="submit">Verileri Getir</button>
                </div>
            </form>
        </div>
        // <div>
        //     <h1>Hava Durumu</h1>
        //     <form onSubmit={(e)=>{e.preventDefault(); handleChange()}}>
        //         <div className="form">
        //             <input onChange={(e)=>setCity(e.target.value)} type="text" className="inputText" placeholder="Şehri Giriniz" />
        //         </div>
        //         <div className="btnDiv">
        //             <button className="btn" type="submit">Verileri Getir</button>
        //         </div>
        //     </form>
        // </div>
    )
}