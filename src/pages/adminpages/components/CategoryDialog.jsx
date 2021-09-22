import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { ComboBox } from './ComboBox'
export const CategoryDialog = props => {
    const { actionFetchData, open, setOpen, category, setCategory } = props

    const [
        dialogTitle,
        dialogContext,
        buttonLabel
    ] = category.hasOwnProperty('id')
            ? ['Изменение категории', 'Внесите изменения в выбранную категорию', 'Изменить']
            : ['Добавление категории', 'Внесите данные для добавления категории', 'Добавить']


    const handleClose = () => {
        setOpen(false)
    }

    const handleSaveData = event => {
        console.log(category)
        actionFetchData()
        setOpen(false)
    }

    const handleChange = name => ({ target: { value } }) => {
        setCategory({ ...category, [name]: value })
        
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    {dialogTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{dialogContext}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Название"
                        type="text"
                        fullWidth
                        value={category.name}
                        onChange={handleChange('name')}
                    />
                    <TextField
                        margin="dense"
                        label="index"
                        type="number"
                        fullWidth
                        value={category.index}
                        onChange={handleChange('index')}
                    />
                    <ComboBox
                        category={category}
                        setCategory={setCategory}
                        value={category.parentId}
                    />
                    <TextField
                        margin="dense"
                        type="file"
                        fullWidth
                        onChange={(e) => setCategory({ ...category, file: e.target.files[0] })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleSaveData} color="primary">
                        {buttonLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
