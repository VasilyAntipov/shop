import './regform.scss'
import React, { useState } from 'react'
import {
    Button,
    TextField,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { openAuthDialog, loadUserData, setIsAuth } from '../../../redux/actions'
import { registration } from '../../../http/userApi'

export const RegForm = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(openAuthDialog(false));
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleRegister = async () => {
        try {
            const data = await registration(email, password)
            dispatch(loadUserData(data))
            dispatch(setIsAuth(true))
            setMessage('Вы успешно зарегистрировались')
            setTimeout(handleClose, 2000)
        } catch (e) {
            setMessage(e.response.data.message)
        }
    }


    return (
        <div className="reg-form">
            <div className="input-container">
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Пароль"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    data onChange={e => setPassword(e.target.value)}
                />
                <p className={
                    message === 'Вы успешно зарегистрировались'
                        ? 'message'
                        : 'error'
                } >{message}</p>
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
