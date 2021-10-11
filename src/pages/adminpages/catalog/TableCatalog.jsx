import React, { useState } from 'react'
import './styles/tablecatalog.scss'
import { EnhancedTable } from '../components/EnhancedTable'
import { useSelector, useDispatch } from 'react-redux'
import {
    admCatalogTableParentSelector,
    getMenuItemsByParentIdSelector,
    getMenuItemByIdSelector,
    menuItemsSelector
} from '../../../redux/selectors/menuSelectors'
import { deleteCategory, updateCategory, createCategory } from '../../../http/categoryApi'
import { addCategory, changeOneCategory, deleteCategoryAction, setCatalogTableParent } from '../../../redux/actions'
import { columnsCatalog, CATALOG, sortHeadersCatalog, labelsCategory } from './utils/constants'
export const TableCatalog = () => {

    const dispatch = useDispatch()
    const menuItems = useSelector(getMenuItemsByParentIdSelector)
    const allMenu = useSelector(menuItemsSelector)
    const admParent = useSelector(admCatalogTableParentSelector)
    const getMenuItemById = useSelector(getMenuItemByIdSelector)

    const dialogFields =
        [
            {
                typeField: "textfield",
                itemName: "name",
                label: "Название",
                type:"text",
                autoFocus: true
            },
            {
                typeField: "textfield",
                itemName: "index",
                label: "Индекс",
                type: "number"
            },
            {
                typeField: "autocomplete",
                options: allMenu,
                optionLabel: option => option.id + ' ' + option.name,
                itemName: "parentId",
                label: "Категория",
            },
            {
                typeField: "file",
                itemName: "file",
            }
        ]

    const [category, setCategory] = useState({ parentId: admParent.id })
    const [dialogOptions, setDialogOptions] = useState({
        labels: labelsCategory.add,
        fields: dialogFields,
    })


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

    const addCategoryHandler = () => {
        setCategory({ parentId: admParent.id })
        setDialogOptions({
            labels: labelsCategory.add,
            fields: dialogFields,
        })
    }

    const editCategoryHandler = (row) => {
        console.log(row)
        setCategory(row)
        setDialogOptions({
            labels: labelsCategory.edit,
            fields: dialogFields
        })
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
            typeTable={CATALOG}
            data={menuItems}
            columns={columnsCatalog}
            sortHeaders={sortHeadersCatalog}
            addRow={addCategoryHandler}
            editRow={editCategoryHandler}
            deleteRow={fetchDeleteCategory}
            navigateEnterHandler={navigateEnterCategory}
            navigateLevelUpHandler={navigateLevelUpCategory}
            fetchData={category}
            setFetchData={setCategory}
            fetchDataAction={fetchCategory}
            dialogOptions={dialogOptions}
        />
    )
}
