import React from 'react';
import User from '../18/user';

function users({ users,page}) {
    const startIndex = (page-1)*10;
    const selectedUsers =users.slice(startIndex,startIndex+10);
  return (
    <div className='usersContainer'>
      {
        selectedUsers.map((user)=>(
            <User user={user} key={user.login.uuid}/>
        ))
      }
    </div>
  )
}

export default users;