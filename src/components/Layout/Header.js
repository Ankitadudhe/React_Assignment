import React from 'react';
import classes from './Header.module.css';
import Meals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'
const Header=(props)=>{
    return(
<>
<header className={classes.header}>
    <h1>Meals</h1>
    <HeaderCartButton/>
</header>
<div className={classes.main_image}>
    <img src={Meals}/>
</div>
</>
    )
}
export default Header;