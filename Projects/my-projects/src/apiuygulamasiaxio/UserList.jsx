import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const UserList = ()=>{
    const [users,setUsers] = useState([]);

    const fetchUsers = async ()=>{
        const response = await axios.get("https://randomuser.me/api/?results=5")
        setUsers(response.data.results);
    }
    useEffect(()=>{
        fetchUsers();
    },[])

    return(
        <div>
           
        </div>
    )
}
export default UserList;