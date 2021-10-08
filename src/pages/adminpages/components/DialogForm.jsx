import React, { useState } from 'react'
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
import { EntryField } from './EntryField'
import { COMBO, TEXT, FILE, dialogLabels } from './utils/constants'
import { CATALOG } from '../utils'

export const DialogForm = props => {
    const {
        open,
        setOpen,
        labelsDialog,
        entryFields,
        data,
        setData,
        saveDialogAction
    } = props

    // const disabled =
    //     !editableData?.categoryId
    //     || !editableData?.countryId
    //     || !editableData?.brandId
    //     || !editableData?.file
    //     || !editableData?.name
    //     || !editableData?.price

    const menuItems = useSelector(menuItemsSelector)
    const brands = useSelector(brandsSelector)
    const countries = useSelector(countriesSelector)

    const handleClose = () => {
        setOpen(false)
    }

    const handleSaveData = event => {
        saveDialogAction()
        setOpen(false)
    }



    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    {labelsDialog.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {labelsDialog.context}
                    </DialogContentText>
                    {entryFields.map((props, index) => {
                        return (
                            <EntryField
                                {...props}
                                key={index}
                                data={data}
                                setData={setData}
                            />
                        )
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button
                        onClick={handleSaveData}
                        color="primary"
                    // disabled={disabled}
                    >
                        {labelsDialog.buttonName}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
