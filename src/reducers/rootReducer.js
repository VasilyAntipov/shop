import { combineReducers } from 'redux'
import { menuReducer } from './menuReducer'
import { productsReducer } from './productsReducer'

export const rootReducer = combineReducers({
    menu: menuReducer,
    prod: productsReducer,
})