import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal'
import CartContext from '../../store/cart_context';
const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems=cartCtx.items.length > 0;
    const cartItems=<ul className={classes['cart-items']}>{cartCtx.items.map((
        item)=><li>{item.name}</li>)}</ul>
return(
    <div >
    <Modal onClick={props.hideCartHandler}>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCartHandler}>close</button>
       {hasItems && <button className={classes.button}>order</button>}

    </div>
    </Modal>
    </div>
)
}
export default Cart;