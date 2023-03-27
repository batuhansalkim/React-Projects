import {useState,useEffect} from "react";
import Users from "../18/users";
import pagination from "../18/pagination";

export function App18(){
    const [users,setUsers]=useState();
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(5);

    useEffect(()=>{
        const fetchusers = async()=>{
            setLoading(true);
            const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us");
            const data =await res.json();
            console.log(data);
            setLoading(false);
            setUsers(data.results);
        }
        fetchusers();
    },[])
    const handleClick = num=>{
        setPage(num);
    }
    return(
        <div>
        
            <h1>Pagination App</h1>
            <h5>Page : {page}</h5>
            {
                loading ? <p>Loading...</p>: <>
                <Users users={users} page={page}/>
                <pagination totalPages={totalPages} handleClick={handleClick}/>
                </>
            }
        </div>
    )
}