import React from 'react';
import Cart from '../UI/Cart';
import classes from './userList.module.css';
const UserList=(props)=>{
return(
    <Cart className={classes.users}>
         {props.users.length > 0 ?
        <>
     <ul>
       
        {props.users.map((user)=>(
            <li key={user.id}>{user.name} {user.age > 0 ? `(${user.age} years old `:null }</li>
        ))}
       
    </ul>
    </>
     :null}
    </Cart>
)
}
export default UserList;