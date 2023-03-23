import React,{useState} from "react";
import data from "../proje6/data";
import "../proje6/app6.css";

function App6(){
    const [holidays,setHolidays] = useState(data);
    return(
        <main>
            <section className="container11">
                <h3>National Holidays Dates</h3>
                {
                   holidays.map((holiday=>{
                    return(
                        <div className="holiday" key={holiday.id}>
                            <img src={holiday.img} alt="" />
                            <div>
                                <p>{holiday.title}</p>
                                <p>{holiday.date}</p>
                            </div>
                        
                        </div>
                    )
                   })) 
                }
                <button>Clear All</button>
            </section>
        </main>
    )
}

export default App6;