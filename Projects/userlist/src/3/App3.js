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
    
    return(
        <div>
            <Tours tours={tours}/>
        </div>
    )
}
export default App3;