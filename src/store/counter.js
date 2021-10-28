import {createSlice,configureStore} from '@reduxjs/toolkit'
import Counter from '../components/Counter';
const initialState={counter:0,showCounter:true}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        increase(state,action){
state.counter=state.counter+action.amount;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
})
export    const counterActions=counterSlice.actions;

export default counterSlice.reducer;