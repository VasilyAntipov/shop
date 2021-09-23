import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@mui/material'
import { useSelector } from 'react-redux'
import { menuItemsSelector, admCatalogTableParentSelector } from '../../../redux/selectors/menuSelectors'

export const EditDialog = props => {
    const {
        actionFetchData,
        open,
        setOpen,
        editableData,
        setEditableData,
    } = props

    const [
        dialogTitle,
        dialogContext,
        buttonLabel
    ] = editableData.hasOwnProperty('id')
            ? ['Изменение категории', 'Внесите изменения в выбранную категорию', 'Изменить']
            : ['Добавление категории', 'Внесите данные для добавления категории', 'Добавить']


    const menuItems = useSelector(menuItemsSelector)
    const admParent = useSelector(admCatalogTableParentSelector)
    const NULL_OPTION = { id: 0, name: 'Отсутствует' }
    const options = menuItems.map(item => {
        return { id: item.id, name: item.name }
    })
    options.push(NULL_OPTION)

    const defaultValue = admParent.id === 0
        ? NULL_OPTION
        : { id: admParent.id, name: admParent.name }


    const handleClose = () => {
        setOpen(false)
    }

    const handleSaveData = event => {
        actionFetchData()
        setOpen(false)
    }

    const handleChange = name => ({ target: { value } }) => {
        setEditableData({ ...editableData, [name]: value })

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
                        value={editableData.name}
                        onChange={handleChange('name')}
                    />
                    <TextField
                        margin="dense"
                        label="index"
                        type="number"
                        fullWidth
                        value={editableData.index}
                        onChange={handleChange('index')}
                    />
                    <Autocomplete
                        id="combo-box"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={options}
                        getOptionLabel={option => option.id + ' ' + option.name}
                        defaultValue={defaultValue}
                        style={{ width: 300 }}
                        renderInput={params => (
                            <TextField {...params} label="Категория" variant="outlined" />
                        )}
                        onChange={(event, newValue) => {
                            if (newValue === null) {
                                setEditableData({ ...editableData, parentId: 0 })
                            } else {
                                setEditableData({ ...editableData, parentId: newValue.id })
                            }
                        }}
                    />
                    <TextField
                        margin="dense"
                        type="file"
                        fullWidth
                        onChange={(e) => setEditableData({ ...editableData, file: e.target.files[0] })}
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
