import React,{useState} from "react";
import data from "../proje6/data";
import "../proje6/app6.css";

function App6(){
    const [holidays,setHolidays] = useState(data);
    return(
        <main>
            <section className="container">
                <h3>National Holidays Dates</h3>
                {
                    
                }
                <button>Clear All</button>
            </section>
        </main>
    )
}

export default App6;