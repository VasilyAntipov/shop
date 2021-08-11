import { combineReducers } from 'redux'
import { menuReducer } from './menuReducer'
import { productReducer } from './productReducer'
import { filterReducer } from './filterReducer'


export const rootReducer = combineReducers({
    menu: menuReducer,
    product: productReducer,
    filter: filterReducer,
})  