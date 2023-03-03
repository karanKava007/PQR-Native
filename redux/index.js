// Root Combiner and Thunk and Reducers As Key and Pair Object 
import { CounterAct } from "./reducers/Counter.reducer"
import { combineReducers } from "redux"
export const rootReducer = combineReducers({
    counterLive : CounterAct
})