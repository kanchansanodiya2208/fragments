import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import { useState } from 'react';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return[
        ...prevUsersList,
        {name:uName,age:uAge,id:Math.random().toString()},
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
