import React, { useState } from 'react';

const AddUser=()=>{
    const [username,setUsername]=useState();
    const enteredNameHandler=(event)=>{
    setUsername(event.target.value)
    console.log(username);
    }
    return(
<div>
    <label>Enter Username</label>
    <input type="text" onChange={enteredNameHandler}>{username}</input>
    <label>Age</label>
    <input type="number"/>
</div>
    )
}
export default AddUser;