import React,{useState} from "react";
import people from "../5/data";
import Review from "./Review";
import "../5/app5.css";

function App5(){
    return(
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline"></div>
                </div>
                <Review/>
            </section>
        </main>
    )
}
export default App5;