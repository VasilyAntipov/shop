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
import { setCatalogTableParent, addCategory, changeOneCategory, deleteCategoryAction } from '../../../redux/actions'
import { updateCategory, createCategory } from '../../../http/categoryApi'
import { CatalogTable } from '../components/CatalogTable'
import { ProductTable } from '../components/ProductTable'
import { getProductsByCatId } from '../../../http/productApi'
import { initProductsSuccess } from '../../../redux/actions'
import { productItemsSelector, productIsLoadedSelector } from '../../../redux/selectors/productSelectors'

export const AdminCatalog = () => {
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const [checked, setChecked] = useState(false)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const [loading, setLoading] = useState(true)
    const [showProducts, setShowProducts] = useState(false)
    const dispatch = useDispatch()
    const prodItems = useSelector(productItemsSelector)
    const prodIsLoaded = useSelector(productIsLoadedSelector)


    const fetchData = () => {
        getProductsByCatId(admCatalogTableParent.id)
            .then(data => {
                if (data.count === 0) {
                    setShowProducts(false)
                } else {
                    dispatch(initProductsSuccess(data))
                    setShowProducts(true)
                }
            })
            .finally(setLoading(false))
    }

    const checkedHandle = () => {
        setLoading(true)
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
                    {loading
                        ? <CircularProgress />
                        :
                        <div>
                            {showProducts ?
                                <div>
                                    {prodItems.map(item => {
                                        return (
                                            <div>
                                                {item.name}
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                <div>найн товаров</div>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}