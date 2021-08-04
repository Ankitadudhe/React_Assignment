import react from 'react';

const Button =(props)=>{
    return(
    <div>
        <button text={props.name} onClick={props.onClick}>{props.name} </button>
    </div>
    )
}
export default Button;