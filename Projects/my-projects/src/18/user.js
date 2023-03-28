import React from 'react'

function user({user,key}) {
    return (
        <div className='userContainer'>
            <img src={user.picture.large} alt="" />
            <p>{`Full Name : ${user.name.first} ${user.name.last}`}</p>
            <p>{`Country - City => ${user.location.country} - ${user.location.city}`}</p>
        </div>
        // <div className='userContainer'>
        //     <img src={user.picture.large} alt="" />
        // </div>
    )
}

export default user