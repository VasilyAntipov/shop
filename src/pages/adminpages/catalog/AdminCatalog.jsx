import React, { useState } from 'react'
import './admincatalog.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
    menuIsLoadedSelector,
    admCatalogTableParentSelector
} from '../../../redux/selectors/menuSelectors'
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from '@mui/material'
import { initProducts } from '../../../redux/actions'
import { CatalogTable } from '../components/CatalogTable'
import { ProductTable } from '../components/ProductTable'
import { productSelector } from '../../../redux/selectors/productSelectors'

export const AdminCatalog = () => {
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const [checked, setChecked] = useState(false)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const dispatch = useDispatch()
    const prod = useSelector(productSelector)
    const [hiddenCatalog, setHiddenCatalog] = useState(false)

    const checkedHandle = () => {
        if (!checked)
            dispatch(initProducts(admCatalogTableParent.id))
        setChecked(old => !old)
    }

    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page catalog">
            <div hidden={hiddenCatalog}>
                <CatalogTable />
            </div>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Отображать товары"
                    onChange={() => checkedHandle()}
                    checked={checked}
                />
                <FormControlLabel
                    
                    control={<Checkbox defaultChecked />}
                    label="Спрятать каталог"
                    onChange={() => setHiddenCatalog(old => !old)}
                    checked={hiddenCatalog}
                />
            </FormGroup>
            {
                checked &&
                <div>
                    {prod.items.length === 0
                        ? <div>Товаров нет</div>
                        : <ProductTable />
                    }
                </div>
            }
        </div>
    )
}