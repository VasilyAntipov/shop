import './navbar.scss'
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { ABOUT_ROUTE, ADMIN_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { isAdminSelector, isAuthSelector } from '../../redux/selectors'
import ListAltIcon from '@material-ui/icons/ListAlt';

export const Navbar = () => {
    const isAuth = useSelector(isAuthSelector)
    const isAdmin = useSelector(isAdminSelector)
    const history = useHistory()

    const handleProfileMenuOpen = () => {
        isAuth
            ? history.push(PROFILE_ROUTE)
            : history.push(LOGIN_ROUTE)
    }

    const handleAdminPageOpen = () => {
        history.push(ADMIN_ROUTE)
    }

    return (
        <div className="header-container">

            <div className="header-top">
                <Link to={ABOUT_ROUTE}>
                    <span className='Section-Title'>about</span>
                </Link>
            </div>

            <div className="header-bot">
                <AppBar position="static">
                    <Toolbar className='buttons-bar'>
                        <IconButton>
                            <Link
                                className='dns-button'
                                to={HOMEPAGE_ROUTE}
                            >
                                Little shop
                            </Link>
                        </IconButton>
                        <div>
                            {
                                isAdmin
                                    ? <IconButton
                                        onClick={handleAdminPageOpen}
                                        color="inherit"
                                    >
                                        <ListAltIcon />
                                    </IconButton>
                                    : <div></div>
                            }
                            <IconButton
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div >
    )
}


