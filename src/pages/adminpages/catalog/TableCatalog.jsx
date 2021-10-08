import React, { useState } from 'react'
import './styles/tablecatalog.scss'
import { EnhancedTable } from '../components/EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    admCatalogTableParentSelector,
    getMenuItemsByParentIdSelector,
    getMenuItemByIdSelector
} from '../../../redux/selectors/menuSelectors'
import { columnsCatalog, CATALOG } from '../utils'
import { deleteCategory, updateCategory, createCategory } from '../../../http/categoryApi'
import { addCategory, changeOneCategory, deleteCategoryAction, setCatalogTableParent } from '../../../redux/actions'
import { sortHeadersCatalog } from '../utils'
import {labels} from './utils/constants'
export const TableCatalog = () => {

    const dispatch = useDispatch()
    const menuItems = useSelector(getMenuItemsByParentIdSelector)
    const [category, setCategory] = useState({})
    const [optionsDialog,setOptionsDialog] = useState({})
    const admParent = useSelector(admCatalogTableParentSelector)
    const getMenuItemById = useSelector(getMenuItemByIdSelector)

    const navigateLevelUpCategory = () => {
        const id = admParent.parentId
        dispatch(setCatalogTableParent(getMenuItemById(id)))
    }

    const navigateEnterCategory = (e, row) => {
        const { cellIndex } = e.target
        if (Number(cellIndex)) {
            dispatch(setCatalogTableParent(row.values))
        }
    }

    const addCategory = () => {
        setOptionsDialog()
    }
    const editCategory = () => {
        setOptionsDialog()
    }


    const fetchDeleteCategory = (id) => {
        deleteCategory(id)
            .then(() => {
                dispatch(deleteCategoryAction(id))
            })
    }

    const fetchCategory = () => {
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
            classes="catalog-table"
            type={CATALOG}
            data={menuItems}
            columns={columnsCatalog}
            sortHeaders={sortHeadersCatalog}
            addRow={addCategory}
            editRow={editCategory}
            deleteRow={fetchDeleteCategory}
            navigateEnterHandler={navigateEnterCategory}
            navigateLevelUpHandler={navigateLevelUpCategory}
            fetchData={category}
            setFetchData={setCategory}
            fetchDataAction={fetchCategory}
            optionsDialog
        />
    )
}
