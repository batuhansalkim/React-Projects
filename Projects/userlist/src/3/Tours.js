import React from "react";
import Tour from "./Tour";
import "../3/tours.css";
export default function Tours({tours}){
    return(
        <div className="title">
            <h2>Our Tours</h2>
            <div className="line"></div>
            <div>
                {tours.map((item)=>{
                    return(
                        <Tour key={item.id} {...item}/>
                    )
                    
                })}
            </div>
        </div>
    )
}