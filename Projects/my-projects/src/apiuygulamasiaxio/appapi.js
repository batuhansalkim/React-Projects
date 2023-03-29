import React from "react";
import Header from "../apiuygulamasiaxio/Header";
import "../apiuygulamasiaxio/appapi1.css";
import UserList from "../apiuygulamasiaxio/UserList";
import { SingleUser } from "./SingleUser";
function Appapi(){
    return(
        <div>
            <Header/>
            {/* <UserList/> */}
            <UserList/>
        
        </div>
    )
    // return(
    //     <div>
    //         <Header/>
    //         <UserList/>
    //     </div>
    // )
}
export default Appapi;