import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
import "../3/app.css";
import { useEffect, useState } from "react";
import axios from "axios";

const url = 'https://course-api.com/react-tours-project';

function App3(){

    const [loading,setLoading] = useState(true);
    const [tours,setTours]  = useState([]);

    const removeTour = (id)=>{
        const newTours = tours.filter((tour)=>tour.id !== id);
        setTours(newTours);
    }

    const fetchUser= async()=>{
        setLoading(true);
        try {
            const res = await axios.get(url);
            setLoading(false);
            setTours(res.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
        
    }
    useEffect(()=>{
        fetchUser();
    },[])
    if (loading) {
        return (
            <Loading />
        )
    }
    
    // if(tours.length===0){
    //     return(
    //         <div className="refresh-title">
    //             <h2>no tours left</h2>
    //             <button onClick={()=>fetchUser()}>Refresh</button>
    //         </div>
    //     )
    // }

    if(tours.length === 0){
        return(
            <div>
                <h2>no tours left</h2>
                <button onClick={()=>fetchUser()}>Refresh</button>
            </div>
        )
    }

    return(
        <div>
            <Tours tours={tours} removeTour={removeTour}/>
        </div>
    )
}
export default App3;