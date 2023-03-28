import React from 'react'

function pagination({ totalPages, handleClick }) {
    const pages = [...Array(totalPages).keys()].map(batu=>batu+1);
    return (
        <div>
           {pages.map((num=>(
            <button onClick={()=>handleClick(num)}>{num}</button>
           )))}
        </div>
    )
}

export default pagination