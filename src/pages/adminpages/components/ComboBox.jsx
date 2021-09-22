import React from 'react'
import { useSelector } from 'react-redux'
import { admCatalogTableParentSelector, menuItemsSelector } from '../../../redux/selectors/menuSelectors'
import { Autocomplete, TextField } from '@mui/material'

export const ComboBox = ({ category, setCategory }) => {
    const menuItems = useSelector(menuItemsSelector)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    
    const NULL_OPTION = { id: 0, name: 'Отсутствует' }
    const options = menuItems.map(item => {
        return { id: item.id, name: item.name }
    })
    options.push(NULL_OPTION)
    
    
    const defaultValue = admCatalogTableParent.id === 0
        ? NULL_OPTION
        : { id: admCatalogTableParent.id, name: admCatalogTableParent.name }

    return (
        <Autocomplete
            id="combo-box"
            isOptionEqualToValue={(option, value) => option.id === value.id }
            options={options}
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
