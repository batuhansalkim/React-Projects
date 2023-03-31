import React,{useState} from "react";
import "../3/tour.css";
export default function Tour({id,name,image,price,info,removeTour}){
    const [readMore, setReadMore] = useState(false);

    return(
        <article className="single-tour">
            <img src={image} alt="" />
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            
            <p>
                {readMore ? info : `${info.substring(0,200)}...`}
                <button style={{cursor:"pointer", padding:"6px 7px " , border:"none",outline:"none",background:"black", color:"white"}} onClick={()=>setReadMore(!readMore)}>
                    {readMore ? "kısalt" : "daha fazla"}
                </button>
            </p>
            <button className="delete-btn" onClick={() => removeTour(id)}>
                not interested
            </button>
        </article>
    )
}