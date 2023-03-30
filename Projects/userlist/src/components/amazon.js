import React from "react";
import list from "../data";
import Cards from "../components/card";
import "../styles/amazon.css";
export default function Amazon(){
    return(
        <section>
            {list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))}
        </section>
    )
}
