import { combineReducers } from 'redux'
import { menuReducer } from './menuReducer'
import { productReducer } from './productReducer'
import { filterReducer } from './filterReducer'
import { userReducer } from './userReducer'
import { referenceReducer } from './referenceReducer'

export const rootReducer = combineReducers({
    menu: menuReducer,
    product: productReducer,
    filter: filterReducer,
    user: userReducer,
    reference: referenceReducer,
})