// Store
import { createStore , applyMiddleware } from 'redux';
import { rootReducer } from './index';
import thunk from 'redux-thunk'

export const configStore = () =>{
    const store = createStore(rootReducer , applyMiddleware(thunk));
    return store
}