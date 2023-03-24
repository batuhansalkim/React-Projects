import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { SingleUser } from "./SingleUser";

const UserList = ()=>{


    const [users,setUsers] = useState([]);

    const fetchUsers = async()=>{
        const response = await axios.get("https://randomuser.me/api/?results=5");
        setUsers(response.data.results);
    }
    useEffect(()=>{
        fetchUsers();
    },[])
    

    return(
        <div className="userList">
            <ul>
                {users.map((user,id)=>(
                    <li><SingleUser user={user} key={id}/></li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;