import './regform.scss'
import React from 'react'
import {
    Button,
    TextField,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { openAuthDialog } from '../../redux/actions'

export const RegForm = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(openAuthDialog(false));
    };

    const handleRegister = () => {

    }

    return (
        <div className="reg-form">
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
                    id="email"
                    label="Почтовый ящик"
                    type="email"
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
                <Button onClick={handleRegister} color="primary">
                    Зарегистрироваться
                </Button>
                <Button onClick={handleClose} color="primary">
                    Отмена
                </Button>
            </div>
        </div >
    )
}
