import { useEffect, useState } from "react";
import Users from '../18/users';
import Pagination from "../18/pagination";
import "../18/app18.css"

function App18() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);

    useEffect(()=>{
        const fetchUsers=async()=>{
            setLoading(true);
            const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us");
            const data = await res.json();
            console.log(data);
            setLoading(false);
            setUsers(data.results);
        }
        fetchUsers();
    },[])
    const handleClick = num =>{
        setPage(num);
    }

    return(
        <div>
            <h1>Pagination App</h1>
            <h5>Page: {page}</h5>
            {
                loading ? <p>Loading...</p> : 
                <>
                <Users users={users} page={page}/>
                <Pagination totalPages={totalPages} handleClick={handleClick}/>
                </>
            }
            
        </div>
    )











    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         setLoading(true)
    //         const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
    //         const data = await res.json()
    //         setLoading(false);
    //         setUsers(data.results)
    //     };
    //     fetchUsers();
    // }, []);
    
    // return (
    //     <div>
    //         <h1>Pagination App</h1>
           
    //         {loading ? <p>Loading...</p> : <>
    //             <Users users={users} page={page} />
    //         </>}

    //     </div>

    // )
}

export default App18;