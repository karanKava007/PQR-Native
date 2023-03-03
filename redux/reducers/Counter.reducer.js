import * as ActionTypes from '../ActionTypes'
const initialState = {
    count: 0,
}
export const CounterAct = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_DATA:
            // console.log(count)
            return {
                ...state, count: state.count + 1,
                
            }
        case ActionTypes.DECREMENT_DATA:
            return {
                ...state, count: state.count - 1,
            }
        default:
            return state
    }
}