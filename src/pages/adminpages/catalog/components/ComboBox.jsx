import React from 'react'
import {useSelector} from 'react-redux'
import { admCatalogTableParentSelector, menuItemsSelector } from '../../../../redux/selectors/menuSelectors'
import { Autocomplete, TextField } from '@mui/material'

export const ComboBox = ({category, setCategory}) => {
    const menuItems = useSelector(menuItemsSelector)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)

    const defaultProps = {
        options: menuItems,
        getOptionLabel: (option) => option.name,
    }

    const defaultValue = admCatalogTableParent.id === null
        ? { id: null, name: 'Отсутствует' }
        : { id: admCatalogTableParent.id, name: admCatalogTableParent.name }

    return (
        <Autocomplete
            id="combo-box-demo"
            options={menuItems}
            getOptionLabel={option => option.name}
            defaultValue={defaultValue}
            style={{ width: 300 }}
            renderInput={params => (
                <TextField {...params} label="Категория" variant="outlined" />
            )}
            onChange={(event, newValue) => {
                if (newValue === null) {
                    setCategory({ ...category, parentId: null })
                } else {
                    setCategory({ ...category, parentId: newValue.id })
                }

            }}
        />
    )
}
