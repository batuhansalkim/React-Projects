import React from 'react'
import "../7/app7.css";
function Menu({items}) {
  return (
    <div className='section-center'>
        {items.map((menuItem)=>{
            return <article key={menuItem.id} className='menu-item'>
              <img src={menuItem.img} alt="" />
              <div className='item-info'>
                <header>
                  <h4>{menuItem.title}</h4>
                  <h4 className='price'>${menuItem.price}</h4>
                </header>
                <p className='item-text'>{menuItem.desc}</p>
              </div>
            </article>
        })}
    </div>
  )
}

export default Menu