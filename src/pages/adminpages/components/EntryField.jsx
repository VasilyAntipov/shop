import React from 'react'
import { TEXT, COMBO, FILE } from './utils/constants'
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@mui/material'

export const EntryField = (props) => {

    const {
        typeField,
        options,
        optionLabel,
        data,
        setData,
        label,
        itemName,
        type
    } = props


    const handleChange = (name, value) => {
        setData({ ...data, [name]: value })
    }


    if (typeField === COMBO)
        return (
            <Autocomplete
                id={`${label}-combo-box`}
                options={options}
                getOptionLabel={optionLabel}
                value={options.find(item => item.id === data[itemName]) || null}
                onChange={(e, newValue) => handleChange(itemName, newValue.id)}
                renderInput={params => (
                    <TextField {...params} label={label} variant="outlined" />
                )}
                sx={{ width: 300 }}
                disableClearable
            />
        )

    if (typeField === TEXT)
        return (
            <TextField
                id={`${label}-textfield`}
                autoFocus
                margin="dense"
                label={label}
                type={type}
                fullWidth
                value={data[itemName]}
                onChange={(e) => handleChange(itemName, e.target.value)}
            />
        )

    if (typeField === FILE)
        return (
            <TextField
                margin="dense"
                type="file"
                fullWidth
                onChange={(e) => handleChange(itemName, e.target.files[0])}
            />
        )

    return null

}
