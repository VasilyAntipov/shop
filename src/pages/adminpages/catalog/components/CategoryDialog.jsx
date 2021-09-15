import React, { useState } from 'react'

import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import { useSelector } from 'react-redux'
import { admCatalogTableParentSelector } from '../../../../redux/selectors/menuSelectors'

export const CategoryDialog = props => {
    const { actionCategoryHandler, dataOriginal, dialogType } = props
    const { id } = useSelector(admCatalogTableParentSelector)
    const [category, setCategory] = useState({ ...dataOriginal, parentId: id })

    const [open, setOpen] = useState(false)
    const addArray = ['Add', 'add', 'Добавление категории',
        'Внесите данные для добавления категории', 'Добавить']
    const editArray = ['Edit', 'edit', 'Изменение категории',
        'Внесите изменения в выбранную категорию', 'Изменить']
    const [
        action,
        ariaLabel,
        dialogTitle,
        dialogContext,
        saveButtonText
    ] = dialogType === 'Add'
            ? addArray
            : editArray

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSaveData = event => {
        actionCategoryHandler(category)
        setOpen(false)
    }

    const handleChange = name => ({ target: { value } }) => {
        setCategory({ ...category, [name]: value })
    }

    return (
        <div>
            <Tooltip title={action}>
                <IconButton aria-label={ariaLabel} onClick={handleClickOpen}>
                    {dialogType === 'Add' ? <AddIcon /> : <EditIcon />}
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{dialogContext}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Название"
                        type="text"
                        fullWidth
                        value={category.name}
                        isRequired
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
                    <TextField
                        margin="dense"
                        label="parentId"
                        type="number"
                        fullWidth
                        value={category.parentId}
                        onChange={handleChange('parentId')}
                    />
                    <TextField
                        margin="dense"
                        label="Фотография"
                        type="file"
                        fullWidth
                        isRequired
                        onChange={(e) => setCategory({ ...category, file: e.target.files[0] })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleSaveData} color="primary">
                        {saveButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
