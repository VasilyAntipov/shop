import './loginform.scss'
import React from 'react'
import {
    Button,
    TextField,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { openAuthDialog } from '../../redux/actions'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(openAuthDialog(false));
    };
    const handleLogin = () => {

    }
    return (
        <div className="login-form">
            <div className="input-container">
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Имя"
                    type="login"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Пароль"
                    type="password"
                    fullWidth
                />
            </div>
            <div className="buttons">
                <Button onClick={handleLogin} color="primary">
                    Войти
                </Button>
                <Button onClick={handleClose} color="primary">
                    Отмена
                </Button>
            </div>
        </div >
    )
}
