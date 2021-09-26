import {useState} from 'react';

const useInput=()=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [isTouched,setIsTouched]=useState(false);
    const valueIsvalid=enteredValue.trim()!=='' ;
    const hasError=!valueIsvalid && isTouched;
    const valueChangeHandler=event=>{
        setEnteredValue(event.target.value);
       
      }
      const valueBlurInput=event=>{
        setIsTouched(true)
        // setIsTouched(false)
      
        
      }
      const reset=()=>{
          setEnteredValue('');
          setIsTouched(false);
      }
    return{
        value:enteredValue,
        isValid:valueIsvalid,
        hasError,valueChangeHandler,valueBlurInput,
        reset
    }
}
export default useInput;