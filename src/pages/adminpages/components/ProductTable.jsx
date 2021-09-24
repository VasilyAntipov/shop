import React, { useState } from 'react'
import { EnhancedTable } from './EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    productItemsSelector,
} from '../../../redux/selectors/productSelectors'
import { columnsProducts, PRODUCT, sortHeadersProduct } from '../utils'

export const ProductTable = () => {

    const dispatch = useDispatch()
    const data = useSelector(productItemsSelector)
    const [product, setProduct] = useState({})

    const handleProductDelete = (id) => {
        //запрос на удаление
        console.log('delete product')
        // deleteProduct(id)
        //     .then(() => {
        //         dispatch(deleteCategoryAction(id))
        //     })
    }

    const actionFetchData = () => {
        // const formData = new FormData()
        console.log('actionfetch')
        // for (let key in category) {
        //     formData.append(key, category[key])
        // }
        // if (category.hasOwnProperty('id')) {
        //     updateCategory(formData)
        //         .then(data => {
        //             dispatch(changeOneCategory(data))
        //         })
        // } else {
        //     createCategory(formData)
        //         .then(data => {
        //             dispatch(addCategory(data))
        //         })
        // }
    }

    return (
        <EnhancedTable
            editableData={product}
            setEditableData={setProduct}
            actionFetchData={actionFetchData}
            type={PRODUCT}
            columns={columnsProducts}
            data={data}
            handleRowDelete={handleProductDelete}
            sortHeaders={sortHeadersProduct}
        />
    )
}
