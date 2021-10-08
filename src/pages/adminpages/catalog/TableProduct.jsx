import React, { useState } from 'react'
import './styles/tableproduct.scss'
import { EnhancedTable } from '../components/EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    productItemsSelector,
} from '../../../redux/selectors/productSelectors'
import { columnsProducts, PRODUCT, sortHeadersProduct } from '../utils'
import { createProduct, updateProduct } from '../../../http/productApi'
import { admCatalogTableParentSelector } from '../../../redux/selectors/menuSelectors'

export const TableProduct = () => {

    const dispatch = useDispatch()
    const data = useSelector(productItemsSelector)
    const admParent = useSelector(admCatalogTableParentSelector)
    const [product, setProduct] = useState({})

    // const dialogData = [
    //     {
    //         typeField: TEXT,
    //         itemName: "name",
    //         label: "Название",
    //         fetchData,
    //         setFetchData,
    //     },
    //     {
    //         typeField: TEXT,
    //         itemName: "price",
    //         label: "Цена",
    //         fetchData,
    //         setFetchData,
    //     },
    //     {
    //         typeField: COMBO,
    //         options: menuItems,
    //         optionLabel: option => option.id + ' ' + option.name,
    //         itemName: "categoryId",
    //         label: "Категория",
    //         fetchData,
    //         setFetchData,
    //     },
    //     {
    //         typeField: COMBO,
    //         options: brands,
    //         optionLabel: option => option.name,
    //         itemName: "brandId",
    //         label: "Производитель",
    //         fetchData,
    //         setFetchData,
    //     },
    //     {
    //         typeField: COMBO,
    //         options: countries,
    //         optionLabel: option => option.name,
    //         itemName: "countryId",
    //         label: "Страна",
    //         fetchData,
    //         setFetchData,
    //     },
    //     {
    //         typeField: FILE,
    //         itemName: "file",
    //         fetchData,
    //         setFetchData,
    //     }
    // ]

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
        // const formData = new FormData()
        // formData.append('name', product.name)
        // formData.append('price', product.price)
        // formData.append('brandId', product.brandId)
        // formData.append('countryId', product.countryId)
        // formData.append('categoryId', product.categoryId)
        // formData.append('file', product.file)

        // if (product.hasOwnProperty('id')) {
        //     formData.append('id', product.id)
        //     updateProduct(formData)
        //         // .then(data => {
        //         //     dispatch(changeOneCategory(data))
        //         // })
        // } else {
        //     createProduct(formData)
        //         // .then(data => {
        //         //     dispatch(addCategory(data))
        //         // })
        // }
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
