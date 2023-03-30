import axios from "axios";
import React,{useState,useEffect} from "react"
import SingleUser from "./SingleUser";
function UserList(){
    
    const [users,setUsers] =  useState([]);
    
    const fetchUser = async()=>{
        const res = await axios.get("https://randomuser.me/api/?results=5");
        setUsers(res.data.results);
    }
    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <div className="appbatu">
           <ul>
                {
                    users.map((item, id) => (
                        <SingleUser batu={item} key={id} />
                    ))
                }
           </ul>
                
            
            
        </div>
    )
}
export default UserList;