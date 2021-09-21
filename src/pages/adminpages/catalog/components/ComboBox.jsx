import React from 'react'
import {useSelector} from 'react-redux'
import { admCatalogTableParentSelector, menuItemsSelector } from '../../../../redux/selectors/menuSelectors'
import { Autocomplete, TextField } from '@mui/material'

export const ComboBox = ({category, setCategory, value}) => {
    const menuItems = useSelector(menuItemsSelector)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)

    const defaultValue = admCatalogTableParent.id === 0
        ? { id: 0, name: 'Отсутствует' }
        : { id: admCatalogTableParent.id, name: admCatalogTableParent.name }

    return (
        <Autocomplete
            id="combo-box-demo"
            value={value}
            options={menuItems}
            getOptionLabel={option => option.id + ' ' + option.name}
            defaultValue={defaultValue}
            style={{ width: 300 }}
            renderInput={params => (
                <TextField {...params} label="Категория" variant="outlined" />
            )}
            onChange={(event, newValue) => {
                if (newValue === null) {
                    setCategory({ ...category, parentId: 0 })
                } else {
                    setCategory({ ...category, parentId: newValue.id })
                }

            }}
        />
    )
}
