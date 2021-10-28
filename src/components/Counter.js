import classes from './Counter.module.css';
import { useSelector,useDispatch,connect } from 'react-redux';
import {counterActions} from '../store/counter'
import { Component } from 'react';
const Counter = () => {
  const dispatch=useDispatch();
 const counter= useSelector(state=>state.counter)
const show=useSelector(state=>state.showCounter)
 const increamentHandler=()=>{
   dispatch(counterActions.increament())
 }

 const decreamentHandler=()=>{
  dispatch(counterActions.decreament())
}
const increaseHandler=()=>{
  dispatch(counterActions.increase(10))//{type:'increase',payload:10}
}
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>-- COUNTER VALUE --{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseHandler}>Increament by 5</button>

        <button onClick={decreamentHandler}>decreament</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter
// class Counter extends Component{
//   increamentHandler=()=>{
// this.props.increament()
//   }
//   decreamentHandler=()=>{
// this.props.decreament();
//   }
//   toggleCounterHandler=()=>{

//   }
//   render(){
//     return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>-- COUNTER VALUE --{this.props.counter}</div>
//       <div>
//         <button onClick={this.increamentHandler}>Increament</button>
//         <button onClick={this.decreamentHandler}>decreament</button>
//         </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }
// const mapStateToProps=state=>{
//   return{
//     counter:state.counter
//   }
// }
// const mapDispatchToProps=dispatch=>{
//   return{
//     increament:()=>dispatch({type:'increment'}),
//     decreament:()=>dispatch({type:'decrement'})

//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
