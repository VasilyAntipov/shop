import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { EntryField } from './EntryField'

export const DialogForm = props => {
    const {
        open,
        setOpen,
        options,
        fetchData,
        setFetchData,
        fetchDataAction,
    } = props

    const { labels, fields} = options
    // const disabled =
    //     !editableData?.categoryId
    //     || !editableData?.countryId
    //     || !editableData?.brandId
    //     || !editableData?.file
    //     || !editableData?.name
    //     || !editableData?.price

    const handleClose = () => {
        setOpen(false)
    }

    const handleSaveData = event => {
        fetchDataAction()
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
                    {labels.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {labels.context}
                    </DialogContentText>
                    {fields.map((props, index) => {
                        return (
                            <EntryField
                                {...props}
                                key={index}
                                data={fetchData}
                                setData={setFetchData}
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
                        {labels.button}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
