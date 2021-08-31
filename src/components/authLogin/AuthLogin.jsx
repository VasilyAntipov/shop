import './authlogin.scss'
import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { openAuthDialog } from '../../redux/actions'
import { authDialogOpenSelector } from '../../redux/selectors'


export const AuthLogin = () => {
    const open = useSelector(authDialogOpenSelector)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(openAuthDialog(false));
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    )
}
