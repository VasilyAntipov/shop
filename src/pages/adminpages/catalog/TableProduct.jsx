import React, { useState } from 'react'
import './styles/tableproduct.scss'
import { EnhancedTable } from './components/EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    productItemsSelector,
} from '../../../redux/selectors/productSelectors'
import { columnsProduct, PRODUCT, sortHeadersProduct } from './utils/constants'
import { createProduct, deleteProduct, updateProduct } from '../../../http/productApi'
import { admCatalogTableParentSelector, menuItemsSelector } from '../../../redux/selectors/menuSelectors'
import { brandsSelector, countriesSelector } from '../../../redux/selectors/referenceSelector'
import { labelsProduct } from './utils/constants'
import { addProductAction, deleteProductAction, updateProductAction } from '../../../redux/actions'
export const TableProduct = () => {

    const dispatch = useDispatch()
    const productsItems = useSelector(productItemsSelector)
    const menuItems = useSelector(menuItemsSelector)
    const brands = useSelector(brandsSelector)
    const countries = useSelector(countriesSelector)
    const admParent = useSelector(admCatalogTableParentSelector)
    const [product, setProduct] = useState({ categoryId: admParent.id })

    const dialogFields =
        [
            {
                typeField: "textfield",
                itemName: "name",
                label: "Название",
                type: "text",
                autoFocus: true
            },
            {
                typeField: "textfield",
                itemName: "price",
                label: "Цена",
                type: "number"
            },
            {
                typeField: "autocomplete",
                options: menuItems,
                optionLabel: option => option.id + ' ' + option.name,
                itemName: "categoryId",
                label: "Категория",
            },
            {
                typeField: 'autocomplete',
                options: brands,
                optionLabel: option => option.name,
                itemName: "brandId",
                label: "Производитель",
            },
            {
                typeField: "autocomplete",
                options: countries,
                optionLabel: option => option.name,
                itemName: "countryId",
                label: "Страна",
            },
            {
                typeField: "file",
                itemName: "file",
            }
        ]
    const [dialogOptions, setDialogOptions] = useState({
        labels: labelsProduct.add,
        fields: dialogFields,
    })


    const addProduct = () => {
        setProduct({ parentId: admParent.id })
        setDialogOptions({
            labels: labelsProduct.add,
            fields: dialogFields,
        })
    }

    const editProduct = (row) => {
        setProduct(row)
        setDialogOptions({
            labels: labelsProduct.edit,
            fields: dialogFields
        })
    }

    const fetchDeleteProduct = (id) => {
        deleteProduct(id)
            .then(() => {
                dispatch(deleteProductAction(id))
            })
    }

    const fetchProduct = () => {
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
                .then(data => {
                    console.log(data)
                    dispatch(updateProductAction(data))
                })
        } else {
            createProduct(formData)
                .then(data => {
                    console.log(data)
                    dispatch(addProductAction(data))
                })
        }
    }

    return (
        <EnhancedTable
            classes="product-table"
            typeTable={PRODUCT}
            data={productsItems}
            columns={columnsProduct}
            sortHeaders={sortHeadersProduct}
            addRow={addProduct}
            editRow={editProduct}
            deleteRow={fetchDeleteProduct}
            fetchData={product}
            setFetchData={setProduct}
            fetchDataAction={fetchProduct}
            dialogOptions={dialogOptions}
        />
    )
}



