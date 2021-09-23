import React, { useState } from 'react'
import { EnhancedTable } from './EnhancedTable'
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

export const CatalogTable = (
    { checked, fetchData }
) => {

    const dispatch = useDispatch()
    const data = useSelector(getMenuItemsByParentIdSelector)
    const [category, setCategory] = useState({})
    const admParent = useSelector(admCatalogTableParentSelector)
    const getMenuItemById = useSelector(getMenuItemByIdSelector)

    const handleCategoryDelete = (id) => {
        deleteCategory(id)
            .then(() => {
                dispatch(deleteCategoryAction(id))
            })
    }

    const backToUpHandler = () => {
        const id = admParent.parentId
        dispatch(setCatalogTableParent(getMenuItemById(id)))
    }
    const rowClickHandler = (row) => {
        dispatch(setCatalogTableParent(row.values))
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

    return (
        <EnhancedTable
            editableData={category}
            setEditableData={setCategory}
            actionFetchData={actionFetchData}
            type={CATALOG}
            columns={columnsCatalog}
            data={data}
            handleRowDelete={handleCategoryDelete}
            sortHeaders={sortHeadersCatalog}
            rowClickHandler={rowClickHandler}
            backToUpHandler={backToUpHandler}

        />
    )
}
