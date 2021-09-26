import {useState, useEffect} from "react";
import useInput from '../hooks/use-input'
const SimpleInput = (props) => {
  // const {value:enteredName,hasError:nameInputHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler,reset:resetNameInput}=useInput();

  // const {value:enteredEmail,hasError:nameInputHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler,reset:resetNameInput}=useInput();

const [enteredName,setEnteredName]=useState('');
const [enterNameTouch,setenterNameTouch]=useState(false);
const [formIsValid,setformIsValid]=useState(false);
const [enteredEmail,setEnteredEmail]=useState('');
const [enterEmailTouch,setenterEmailTouch]=useState(false);

const enterNameIsvalid=enteredName.trim()!=='' ;
const enterEmailIsvalid=enteredEmail.trim()!=='' && enteredEmail.includes('@') ;

const nameInputIsInvalid=!enterNameIsvalid && enterNameTouch
const emailInputIsInvalid=!enterEmailIsvalid && enterEmailTouch

useEffect(()=>{
if(enterNameIsvalid && enterEmailIsvalid){
  setformIsValid(true);
}
else{
  setformIsValid(false);
}
},[enterNameIsvalid ,enterEmailIsvalid]);


const nameInputChangeInput=event=>{
  setEnteredName(event.target.value);
 
}
const emailInputChangeInput=event=>{
  setEnteredEmail(event.target.value);
 
}
const formSubmitHandler=event=>{
  event.preventDefault();
  setenterNameTouch(true)
  setenterEmailTouch(true)


console.log("enteredName",enteredName);
setEnteredName('')
setEnteredEmail('')
//it same as above but it directly update the dom
// nameInputRef.current.value='' // not ideal dont manipulating the dom
}
const nameBlurInput=event=>{
  setenterNameTouch(true)
  setenterNameTouch(false)

  
}
const nameInputClass=nameInputIsInvalid ?'form-control invalid':'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' id='name' onChange={nameInputChangeInput}
        value={enteredName}
        onBlur={nameBlurInput}
        />
        
      {nameInputIsInvalid&&  <p className="error-text">name must not be empty</p>}
      </div>
      <div className={nameInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
        type='text' id='email' onChange={emailInputChangeInput}
        value={enteredEmail}
        onBlur={nameBlurInput}
        />
        
      {emailInputIsInvalid&&  <p className="error-text">email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
