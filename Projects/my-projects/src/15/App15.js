import React from "react";
import "../15/app15.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function App15(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer />
        </div>
    )
}