import React from 'react'

function User({user}) {
  return (
    <div className='userContainer'>
        <img src={user.picture.large} alt="" />
        <p>{`Full Name : ${user.name.first} ${user.name.last}`}</p>
        <p>{`Phone : ${user.phone}`}</p>
    </div>
  )
}

export default User;