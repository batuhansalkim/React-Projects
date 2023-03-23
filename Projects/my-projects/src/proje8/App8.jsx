import { useState } from "react";
import "../proje8/app8.css";
function App8(){

    const [showFinalResult, setFinalResult] = useState(false);
    return(
        <div className="App">
            <div className="container">
                <h1>Self Reliance App</h1>
                <h2>Current Score : 2</h2>
                {
                    showFinalResult ? 
                    <div className="result">
                    <h1>Result</h1>
                    <h2>
                        1 out of 7 self confident
                    </h2>
                    <button>Restart Test</button>
                </div>
                :
                <div className="question-card">
                    <h2>Question 1 out of 7</h2>
                    <h3>I see myself as a succesfull person</h3>
                    <ul>
                        <li>never</li>
                        <li>rarely</li>
                        <li>often</li>
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}

export default App8;