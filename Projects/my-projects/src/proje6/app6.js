import React,{useState} from "react";
import data from "../proje6/data";
import "../proje6/app6.css";

function App6(){
    const [holidays,setHolidays] = useState(data);
    const deleteDay=(id)=>{
        const newArray = holidays.filter(item=>item.id !== id);
        setHolidays(newArray);
    }
    
    return(
        <main>
            <section className="container11">
                <h3>National Holidays Dates</h3>
                {
                    holidays.map((holiday=>{
                        return(
                            <div className="holiday" key={holiday.id}>
                                <img src={holiday.img}/>
                                <div className="caption">
                                    <p>{holiday.title}</p>
                                    <p>{holiday.date}</p>
                                    <button onClick={()=>deleteDay(holiday.id)}>X</button>
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