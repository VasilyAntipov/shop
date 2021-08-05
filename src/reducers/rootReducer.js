import { combineReducers } from 'redux'
import { menuReducer } from './menuReducer'
import { productsReducer } from './productsReducer'
import { filtersReducer } from './filtersReducer'


export const rootReducer = combineReducers({
    menu: menuReducer,
    prod: productsReducer,
    filters: filtersReducer,
})