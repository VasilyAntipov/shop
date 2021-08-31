import './authdialog.scss'
import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    AppBar,
    Tabs,
    Typography,
    Box,
    Tab


} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { openAuthDialog } from '../../redux/actions'
import { authDialogOpenSelector } from '../../redux/selectors'
import { LoginForm } from '../loginform/LoginForm'
import { RegForm } from '../regform/RegForm'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const AuthDialog = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const open = useSelector(authDialogOpenSelector)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(openAuthDialog(false));
    };

    return (
        <Dialog
            className="auth-dialog"
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >

            <AppBar position="static" color="default">
                <Tabs
                    indicatorColor="primary"
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="Авторизация" />
                    <Tab label="Регистрация" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <LoginForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RegForm />
            </TabPanel>
        </Dialog>
    )
}
