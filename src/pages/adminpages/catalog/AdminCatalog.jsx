import React, { useState } from 'react'
import { EnhancedTable } from '../components/EnhancedTable'
import './admincatalog.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getMenuItemsByParentIdSelector, menuIsLoadedSelector } from '../../../redux/selectors/menuSelectors'
import { columns } from '../utils'
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from '@mui/material'
import { deleteCategory } from '../../../http/categoryApi'
import { deleteCategoryAction } from '../../../redux/actions'
export const AdminCatalog = () => {
    const dispatch = useDispatch()
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const data = useSelector(getMenuItemsByParentIdSelector)
    const [checked, setChecked] = useState(false)

    const handleCategoryDelete = (id) => {
        deleteCategory(id)
            .then(() => {
                dispatch(deleteCategoryAction(id))
            })
    }

    const handleProductDelete = () => {
        alert('delete product')
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

    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page catalog">
            <EnhancedTable
                actionFetchData={actionFetchData}
                editable={true}
                columns={columns}
                data={data}
                handleRowDelete={handleCategoryDelete}
            />
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Отображать товары"
                    onChange={() => setChecked(old => !old)}
                    checked={checked}
                />
            </FormGroup>
            <div
                hidden={!checked}
            >
                <EnhancedTable
                    editable={true}
                    columns={columns}
                    data={data}
                    handleRowDelete={handleProductDelete}
                />
            </div>
        </div>
    )
}