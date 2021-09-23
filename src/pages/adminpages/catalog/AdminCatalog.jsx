import React, { useState } from 'react'
import { EnhancedTable } from '../components/EnhancedTable'
import './admincatalog.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
    getMenuItemsByParentIdSelector,
    menuIsLoadedSelector,
    admCatalogTableParentSelector
} from '../../../redux/selectors/menuSelectors'
import { columns } from '../utils'
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from '@mui/material'
import { deleteCategory } from '../../../http/categoryApi'
import { setCatalogTableParent, addCategory, changeOneCategory, deleteCategoryAction, initProducts } from '../../../redux/actions'
import { updateCategory, createCategory } from '../../../http/categoryApi'
import { CatalogTable } from '../components/CatalogTable'
import { ProductTable } from '../components/ProductTable'
import { getProductsByCatId } from '../../../http/productApi'
import { initProductsSuccess } from '../../../redux/actions'
import { productItemsSelector, productIsLoadedSelector, productIsLoadingSelector, productSelector } from '../../../redux/selectors/productSelectors'

export const AdminCatalog = () => {
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const [checked, setChecked] = useState(false)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const [showProducts, setShowProducts] = useState(false)
    const dispatch = useDispatch()
    const prodItems = useSelector(productItemsSelector)
    const prod = useSelector(productSelector)

    const fetchData = () => {
        dispatch(initProducts(admCatalogTableParent.id))

        // getProductsByCatId(admCatalogTableParent.id)
        //     .then(data => {
        //         if (data.count === 0) {
        //             setShowProducts(false)
        //         } else {
        //             dispatch(initProductsSuccess(data))
        //             setShowProducts(true)
        //         }
        //     })
        //     .finally(setLoading(false))
    }

    const checkedHandle = () => {
        setChecked(old => !old)
        if (!checked)
            fetchData()
    }

    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page catalog">
            <CatalogTable
                checked={checked}
                fetchData={fetchData}
            />
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Отображать товары"
                    onChange={() => checkedHandle()}
                    checked={checked}
                />
            </FormGroup>
            {
                checked &&
                <div>
                    {!prod.isLoaded
                        ? <CircularProgress />
                        :
                        <div>
                            {prodItems.map(item => {
                                return (
                                    <div>
                                        {item.name}
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            }
        </div>
    )
}