import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function Question({batu}) {
    const [show,setShow] = useState(false); 
  return (
      <article className='question' style={{margin: "20px" ,background:"yellow"}}>
        <header style={{display:"flex"}}>
            <h4>{batu.title}</h4>
            <button onClick={()=>setShow(!show)} style={{background:"black",color:"white", padding:"10px 10px",borderRadius:"10px",margin:"10px"}} className='btn'>
                {show ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        {
            show && <p>{batu.info}</p>
        }
        
    </article>
  )
}

export default Question