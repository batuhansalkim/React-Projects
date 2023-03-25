import React,{ useState,useEffect } from "react";
import "../14/Meme.css";
export default function MemeGenerator(){
    const [topText,setTopText] = useState("");
    const [bottomText,setBottomText] = useState("");
    const [randomImg,setRandomImg] = useState("");
    const [allMemeImg,setAllMemeImg] = useState([]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(response=>{
            const {memes}= response.data;
            setAllMemeImg(memes);
        })
    })
    function handleTopChange(e){
        setTopText(e);
        
    }
    function handleBottomChange(e){
        setBottomText(e);
    }
    return(
        <div className="meme-form">
            <div className="inputlar">
                <input 
                type="text"
                className="input"
                name="topText"
                placeholder="enter top text" 
                value={topText}
                onChange={e=>handleTopChange(e.target.value)}
                />
                <input 
                type="text"
                className="input"
                name="bottomText"
                placeholder="enter top text" 
                value={bottomText}
                onChange={e=>handleBottomChange(e.target.value)}
                />
                <button>
                    <div>
                        <span>
                            <p>Generate Meme <p>:)</p></p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <p>Thanks <p>:D</p></p>
                        </span>
                    </div>
                </button>
                <div className="">
                    <img src={randomImg.url} alt="" />
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>
                </div>
            </div>
        </div>
    )
}