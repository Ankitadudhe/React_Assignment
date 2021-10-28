import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'

import CounterReducer  from './counter';
import AuthReducer from './auth'
// const counterReducer=(state=initialState,action)=>{
// if(action.type==='increament'){
//     return {
//         counter:state.counter +1 ,
//         showCounter:state.showCounter
//     };
// }
// if(action.type==='decreament'){
//     return {
//         counter:state.counter - 1 ,
//         showCounter:state.showCounter

//     };
// }
// if(action.type==='increase'){
//     return {
//         counter:state.counter + action.amount,
//         showCounter:state.showCounter

//     };
// }
// if(action.type==='toggle'){
//     return {
//         counter:state.counter ,
//         showCounter:!state.showCounter

//     };
// }
// return state;
// }


const store=configureStore({
    reducer:{reducer:CounterReducer,auth:AuthReducer}});

export default store;