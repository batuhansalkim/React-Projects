import React,{useState} from "react";
import data from "../6/data";
import SingleQuestion from "./Question";
function App6(){
    const [question,setQuestion] = useState(data)
    return(
        <div className="container">
            <h3>Question and answer about login</h3>
            <section className="info">
                {
                    question.map((question)=>{
                        return <SingleQuestion batu={question} key={question.id}/>
                    })
                }
            </section>
        </div>
    )
}
export default App6;