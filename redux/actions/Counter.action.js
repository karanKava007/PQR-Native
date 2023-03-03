import * as ActionTypes from "../ActionTypes";

export const IncrementData = () =>(dispatch)=>{
    dispatch({type:ActionTypes.INCREMENT_DATA , payload:0});
}   
export const DecrementData = () =>(dispatch)=>{
    dispatch({type:ActionTypes.DECREMENT_DATA , payload:0});
}   