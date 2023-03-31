import React,{useState} from "react";
import "../3/tour.css";
export default function Tour({id,name,image,price,info}){
    return(
        <article className="single-tour">
            <img src={image} alt="" />
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>
                
            </p>
            <button className="delete-btn">
                not interested
            </button>
        </article>
    )
}