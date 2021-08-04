import react, { useState } from 'react';
import Button from './button';
import Modal from './modal';
const Session1=()=>{
    const [hide,setHide]=useState();

    const conf=()=>{
        setHide(true)
    }
    const can=()=>{
       setHide(false)
    }
return(
        <>
       <div>
            <Button name="confirm" onClick={conf}/>
            <Button name="cancel" onClick={can}/>
        </div> 
        {hide && <Modal text="are you sure ?" onClose={can}/>}
      </>
    )  
}
export default Session1;