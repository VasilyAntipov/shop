import './loginform.scss'
import React, { useState } from 'react'
import {
    Button,
    TextField,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {
    loadUserData,
    openAuthDialog,
    setIsAuth,
    setIsAdmin
} from '../../redux/actions'
import { login } from '../../http/userApi'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(openAuthDialog(false));
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async () => {
        try {
            const data = await login(email, password)
            dispatch(loadUserData(data))
            dispatch(setIsAuth(true))
            if (data.role === 'ADMIN') {
                dispatch(setIsAdmin(true))
            }
            dispatch(openAuthDialog(false));

        } catch (e) {
            setError(e.response.data.message)
        }

    }

    return (
        <div className="login-form">
            <div className="input-container">
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p className="error">{error}</p>
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
