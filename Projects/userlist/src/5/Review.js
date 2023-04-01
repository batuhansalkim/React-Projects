import React,{useState} from "react";
import people from "../5/data";
import {FaChevronLeft,FaChevronRight, FaQuoteRight} from "react-icons/fa";
import "../5/app5.css";


function Review(){

  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const checKNumber = (number)=>{
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length-1;
    }
    return number;
  }

  const randomUser=()=>{
    let randomNumber =Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if(randomNumber === index){
      randomNumber = index+1;
      
    }
    console.log(randomNumber);

    setIndex(checKNumber(randomNumber));
  }

  const prevPerson=()=>{
    setIndex((index)=>{
      let newItem = index+1;
      return checKNumber(newItem);
    })
  }
  const nextPerson = ()=>{
    setIndex((index)=>{
      let newItem = index-1;
      return checKNumber(newItem);
    })
  }

  return(
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" />
        {/* <span className="quote-icon">
          <FaChevronRight/>
        </span> */}
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomUser}>Suprise me</button>
    </article>
  )
}

export default Review;
