import React, { useEffect, useState } from 'react'
import './styles/admincatalog.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
    menuIsLoadedSelector,
    admCatalogTableParentSelector
} from '../../../redux/selectors/menuSelectors'
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from '@mui/material'
import { initProducts, initReferences } from '../../../redux/actions'
import { productSelector } from '../../../redux/selectors/productSelectors'
import { TableCatalog } from './TableCatalog'
import { TableProduct } from './TableProduct'

export const AdminCatalog = () => {
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const [checked, setChecked] = useState(false)
    const [hiddenCatalog, setHiddenCatalog] = useState(false)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const dispatch = useDispatch()
    const prod = useSelector(productSelector)


    const checkedHandle = () => {
        if (!checked)
            dispatch(initProducts({id:admCatalogTableParent.id}))
        setChecked(old => !old)
    }



    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page catalog">
            {
                hiddenCatalog &&
                <div className='parent-name'>{admCatalogTableParent.name}</div>
            }
            <div hidden={hiddenCatalog}>
                <TableCatalog />
            </div>
            <FormGroup className='checkboxes'>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Отображать товары"
                    onChange={() => checkedHandle()}
                    checked={checked}
                />
                {prod.items.length > 0 &&
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Спрятать каталог"
                        onChange={() => setHiddenCatalog(old => !old)}
                        checked={hiddenCatalog}
                    />
                }
            </FormGroup>
            {
                checked &&
                <div>
                    {prod.items.length === 0
                        ? <div>Товаров нет</div>
                        : <TableProduct />
                    }
                </div>
            }
        </div>
    )
}