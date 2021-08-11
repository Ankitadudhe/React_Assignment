import React, { useState } from 'react';
import Cart from '../UI/Cart';
import classes from './addUser.module.css';
import Button from '../UI/Button';
import ErrorModal  from '../UI/ErrorModal';
import Wrapper from '../.././helper/wrapper'
const AddUser=(props)=>{
    const [username,setUsername]=useState();
    const [age,setAge]=useState();
    const [error,setError]=useState();

    const enteredNameHandler=(event)=>{
    event.preventDefault();
    // setUsername(event.target.value)
    // if(username.trim().length===0 || age.trim().length===0){
    if(username==="")
    {
       setError({
           title:'Invalid input',
           message:'Please enter valid name '
       });
    
       return;
    }
    if(age==="")
    {
    // if(+age < 1){
        setError({
            title:'Invalid input',
            message:'Please enter valid age'
        });
        return;
    }
    props.onAddUser(username,age);
    console.log(username,age);
    setUsername('')
    setAge('')

    }
    const usernameClickHandler=(event)=>{
        setUsername(event.target.value)

    }
    const ageClickHandler=(event)=>{
        setAge(event.target.value)

    }
  const  errorHandler=()=>{
        setError(null)
    }
    return(
        <Wrapper>
 {error &&   <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
<Cart className={classes.input}>
<form onSubmit={enteredNameHandler}>
    <label>Enter Username</label>
    <input  name="username" type="text" onChange={usernameClickHandler}
    value={username}
    />
    <label>Age</label>
    <input type="number" onChange={ageClickHandler}
    value={age}
    />
    <Button type="submit">Add User</Button>
</form>
</Cart>
</Wrapper>
    )
}
export default AddUser;