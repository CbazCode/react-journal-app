import {createStore, combineReducers} from 'redux'
import { authreducer } from '../reducers/authReducer';


const reducers = combineReducers({
    auth: authreducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);