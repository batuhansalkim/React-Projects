import React from "react";
import "../proje5/card.css";

export default function Card(props){
    return(
        <div className="card">
            <div className="cardBody">
                <img src={props.img} alt="" />
                <div className="about">
                    <h2 className="cardTitle">{props.title}</h2>
                    <p className="cardDescription">{props.description}</p>
                </div>
                <button>See The Details</button>
            </div>
        </div>
    )
    
}