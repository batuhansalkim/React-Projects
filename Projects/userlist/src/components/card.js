import React from 'react'

export default function card({item,handleClick}) {
    const { id, title, author, price, img } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}</p>
                <button className='btn' onClick={handleClick(item)}>Add to Card</button>
            </div>
        </div>
        // <div className='cards'>
        //     <div className='image_box'>
        //         <img src={img} />
        //     </div>
        //     <div className='details'>
        //         <p>{title}</p>
        //         <p>{author}</p>
        //         <p>{price} TL</p>
        //         <button className='btn' onClick={()=> handleClick(item)}>Add to Card</button>
        //     </div>
        // </div>
    )
}