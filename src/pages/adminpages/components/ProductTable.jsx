import React, { useState } from 'react'
import './styles/producttable.scss'
import { EnhancedTable } from './EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    productItemsSelector,
} from '../../../redux/selectors/productSelectors'
import { columnsProducts, PRODUCT, sortHeadersProduct } from '../utils'
import { createProduct, updateProduct } from '../../../http/productApi'

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
        console.log(product)
        const formData = new FormData()
        formData.append('name', product.name)
        formData.append('price', product.price)
        formData.append('brandId', product.brandId)
        formData.append('countryId', product.countryId)
        formData.append('categoryId', product.categoryId)
        formData.append('file', product.file)

        if (product.hasOwnProperty('id')) {
            formData.append('id', product.id)
            updateProduct(formData)
                // .then(data => {
                //     dispatch(changeOneCategory(data))
                // })
        } else {
            createProduct(formData)
                // .then(data => {
                //     dispatch(addCategory(data))
                // })
        }
    }

    const rowClickHandler = (e, row) => {
        // console.log(e)
    }

    return (
        <EnhancedTable
            classes="product-table"
            rowClickHandler={rowClickHandler}
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
