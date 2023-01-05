import {createStore, compose, combineReducers} from 'redux'
import { profileReducer } from './profile/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer
})

export const store = createStore(rootReducer, composeEnhancers())