import React from 'react'

export default function card({item}) {
    const { id, title, author, price, img } = item;
    return (
        <div className='cards'>
            <div className='image_box'>
                <img src={img} />
            </div>
            <div className='details'>
                <p>{title}</p>
                <p>{author}</p>
                <p>{price} TL</p>
                <button>Add to Card</button>
            </div>
        </div>
    )
}