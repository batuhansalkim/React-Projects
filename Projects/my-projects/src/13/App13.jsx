import React, {useState,useEffect} from "react"
import "../13/app13.css";

export const App13=()=>{
    const [items,setItems]= useState([]);
    const [visible,setVisible] = useState(3);

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british").then((res)=>res.json()).then((data)=>setItems(data.meals));
    },[])
    return(
        <div className="App">
           <h1 className="header">British Meals <img src="https://i4.hurimg.com/i/hurriyet/75/750x422/62d17f5f4e3fe116206881b0.jpg" alt="" /></h1>
           <div className="container">
            {
                items.map(item=>(
                    <div className="card">
                        <div className="image">
                            <img src={item.strMealThumb} alt="" />
                        </div>
                        <p>{item.strMeal}</p>
                    </div>
                ))}
                <button>Click for More Meals</button>
           </div>
        </div>
    )
}