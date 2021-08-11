import React from 'react';
import Cart from './Cart';
import classes from './error.Modal.css';
import Button from './Button';
const ErrorModal=(props)=>{
    return(
        <div onClick={props.onConfirm}>
            <div className={classes.backdrop}/>
       
    <Cart className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>ok</Button>
    </footer>
    </Cart>
    </div>
    )
}
export default ErrorModal