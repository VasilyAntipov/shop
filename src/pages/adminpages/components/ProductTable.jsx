import React, { useState } from 'react'
import { EnhancedTable } from './EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    productItemsSelector,
} from '../../../redux/selectors/productSelectors'
import { columnsProducts, PRODUCT } from '../utils'
import { deleteCategory, updateCategory, createCategory } from '../../../http/categoryApi'
import { addCategory, changeOneCategory, deleteCategoryAction } from '../../../redux/actions'

export const ProductTable = () => {

    const dispatch = useDispatch()
    const data = useSelector(productItemsSelector)
    const [category, setCategory] = useState({})

    const handleCategoryDelete = (id) => {
        deleteCategory(id)
            .then(() => {
                dispatch(deleteCategoryAction(id))
            })
    }

    const actionFetchData = () => {
        const formData = new FormData()
        for (let key in category) {
            formData.append(key, category[key])
        }
        if (category.hasOwnProperty('id')) {
            updateCategory(formData)
                .then(data => {
                    dispatch(changeOneCategory(data))
                })
        } else {
            createCategory(formData)
                .then(data => {
                    dispatch(addCategory(data))
                })
        }
    }

    return (
        <EnhancedTable
            editableData={category}
            setEditableData={setCategory}
            actionFetchData={actionFetchData}
            type={PRODUCT}
            columns={columnsProducts}
            data={data}
            handleRowDelete={handleCategoryDelete}
        />
    )
}
