import React,{useState} from "react";
import "../proje7/Appapi.css";
import Data from "../proje7/Data.json";

function App7(){
    const [searchItem, setSearchItem] = useState("");
    return(
        <div className="containers">
            <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
            <div className="inputContainer">
                <input type="text" className="search" placeholder="Konsey Üyesi Giriniz..." onChange={(e)=>setSearchItem(e.target.value)} />
                <div className="dataContainer">
                    {
                        Data.filter((val)=>{
                            if (searchItem=="") {
                                return val;
                            }else if(val.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
                                return val;
                            }
                        }).map((val)=>{
                            return(
                              <div className="data" key={val.id}>
                                <img src={val.image} alt="" />
                                <h3>{val.title}</h3>
                                <p>{val.Description}</p>
                            </div>  
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App7;