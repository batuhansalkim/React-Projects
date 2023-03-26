import React,{useState} from "react";
import people from "../17/data";
import {FaChevronCircleLeft,FaChevronCircleRight} from "react-icons/fa";


export const Review=()=>{
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];
    
   function BackBtn(){
    setIndex((index)=>{
        let newBatu = index-1;
        if(newBatu<0){
            newBatu=people.length-1;
        }
        return newBatu;
    })
    }
    function RandomBtn(){
        let randomNumber = Math.floor(Math.random()*people.length);
        setIndex(randomNumber);
    }

   function NextBtn(){
        setIndex((index)=>{
            let newIndex = index+1;
            if(newIndex>people.length-1){
                newIndex = 0;
                
            }console.log(newIndex);
            return newIndex;
            
        })
    
    }
    return(
        <div className="review">
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <div className="name-job">
                <h4 className="name">{name}</h4>
                <p className="job">{job}</p>
            </div>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn">
                    <FaChevronCircleLeft onClick={BackBtn}/>
                </button>
                <button className="next-btn">
                    <FaChevronCircleRight onClick={NextBtn}/>
                </button>
            </div>
            <button className="next-btn" onClick={RandomBtn}>
                Random Character
            </button>
        </div>
    )
}