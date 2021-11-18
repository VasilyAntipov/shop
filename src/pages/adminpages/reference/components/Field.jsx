import React, { Fragment, useState } from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save'

export const Field = (props) => {
    const { value, handlerSave } = props
    const [editData, setEditData] = useState(value)
    const [hidden, setHidden] = useState(true)

    const handleChange = (e) => {
        setEditData({...editData, name: e.target.value})
        setHidden(false)
    }

    const handleSave = () => {
        handlerSave(editData)
        setHidden(true)
    }

    return (
        <Fragment>
            <TextField
                size="small"
                variant="outlined"
                value={editData.name}
                margin="none"
                onChange={handleChange}
            />
            <div
                hidden={hidden}
            >
                <IconButton
                    onClick={handleSave}
                >
                    <SaveIcon />
                </IconButton>
            </div>
        </Fragment>
    )
}
