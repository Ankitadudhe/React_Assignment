import {useState, useEffect} from "react";
const SimpleInput = (props) => {
const [enteredName,setEnteredName]=useState('');
const [enterNameTouch,setenterNameTouch]=useState(false);
const [formIsValid,setformIsValid]=useState(false);
const [enteredEmail,setEnteredEmail]=useState('');
 
const enterNameIsvalid=enteredName.trim()!=='' ;
const enterEmailIsvalid=enteredEmail.trim()!=='' ;

const nameInputIsInvalid=!enterNameIsvalid && enterNameTouch

useEffect(()=>{
if(enterNameIsvalid){
  setformIsValid(true);
}
else{
  setformIsValid(false);
}
},[enterNameIsvalid]);


const nameInputChangeInput=event=>{
  setEnteredName(event.target.value);
 
}
const formSubmitHandler=event=>{
  event.preventDefault();
  setenterNameTouch(true)

console.log("enteredName",enteredName);
setEnteredName('')
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
        <label htmlFor='name'>Your Email</label>
        <input 
        type='text' id='name' onChange={nameInputChangeInput}
        value={enteredEmail}
        onBlur={nameBlurInput}
        />
        
      {nameInputIsInvalid&&  <p className="error-text">name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
