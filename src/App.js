import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

import './App.css';

const App = () => {
  const [usersList,setUsersList]=useState([])

  const addUserHandler=(UName,UAge)=>{
    setUsersList((preUserList)=>{
return[...preUserList,{name:UName,age:UAge,id:Math.random().toString()}]
      })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
};

export default App;
