import React from "react";
import { Review } from "./Review"
import "../17/index.css";
function App17(){
    return(
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Characters
                        <div className="underline">
                        </div>
                    </h2>
                </div>
                <Review/>
            </section>
        </main>
    )
}
export default App17;