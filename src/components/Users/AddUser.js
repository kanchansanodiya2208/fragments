import React, { useState } from "react";
import classes from './AddUser.module.css';
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
import Card from "../Ui/Card";


const AddUser=(props)=>{
const [enteredUsername, setEnteredUsername]=useState('');
const [enteredAge, setEnteredAge]=useState('');
const [error, setError]=useState();
const addUserHandler=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
    {
        setError({
            title:'Invalid Input',
            message:'Please Enter Valide Name or Age',
            
        });
        return;
    }
    if(enteredAge<1)
    {
        setError({
            title:'Invalid Age',
            message:'Please enter Age above 1',
        });
        return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
    

};
const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);

};
const agechangeHandler=(event)=>{
    setEnteredAge(event.target.value);
};
const errorHandler=()=>{
    setError(null);
}

    return(
        <div>
            {error && (
                <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
                />
            )}
     <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />

            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={agechangeHandler} value={enteredAge} />

            <Button type="submit" >AddUser</Button>
        </form>

     </Card>
        </div>
    );
}
export default AddUser;