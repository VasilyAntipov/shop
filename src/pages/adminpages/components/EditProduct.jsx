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
import { brandsSelector, countriesSelector } from '../../../redux/selectors/referenceSelector'
export const EditProduct = props => {
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
            ? ['Изменение продукта', 'Внесите изменения в выбранный продукт', 'Изменить']
            : ['Добавление продукта', 'Внесите данные для добавления продукта', 'Добавить']


    const menuItems = useSelector(menuItemsSelector)
    const admParent = useSelector(admCatalogTableParentSelector)

    const brands = useSelector(brandsSelector)
    const countries = useSelector(countriesSelector)


    const defaultBrand = brands.find(item => item.id === editableData.brandId)
    const defaultCountry = countries.find(item => item.id === editableData.countryId)

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
                        label="Цена"
                        type="number"
                        fullWidth
                        value={editableData.price}
                        onChange={handleChange('price')}
                    />
                    <Autocomplete
                        id="category-combo-box"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={menuItems}
                        getOptionLabel={option => option.id + ' ' + option.name}
                        value={admParent}
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
                    <Autocomplete
                        id="brand-combo-box"
                        options={brands}
                        getOptionLabel={option => option.name}
                        disableClearable
                        style={{ width: 300 }}
                        value={defaultBrand}
                        renderInput={params => (
                            <TextField {...params}
                                label="Производитель"
                                variant="outlined"
                            />
                        )}
                        onChange={(event, newValue) => {
                            setEditableData({ ...editableData, brandId: newValue.id })
                        }}
                    />
                    <Autocomplete
                        id="country-combo-box"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={countries}
                        getOptionLabel={option => option.name}
                        value={defaultCountry}
                        disableClearable
                        style={{ width: 300 }}
                        renderInput={params => (
                            <TextField {...params} label="Страна производства" variant="outlined" />
                        )}
                        onChange={(event, newValue) => {
                            setEditableData({ ...editableData, countryId: newValue.id })
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
