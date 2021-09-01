import './navbar.scss'
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { ABOUT_ROUTE, ADMIN_ROUTE, HOMEPAGE_ROUTE } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { isAdminSelector, isAuthSelector } from '../../redux/selectors/userSelectors'
import ListAltIcon from '@material-ui/icons/ListAlt';
import { openAuthDialog, userLogout } from '../../redux/actions';

export const Navbar = () => {
    const isAuth = useSelector(isAuthSelector)
    const isAdmin = useSelector(isAdminSelector)
    const history = useHistory()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClickProfile = (event) => {
        if (isAuth) {
            setAnchorEl(event.currentTarget);
        } else {
            dispatch(openAuthDialog(true))
        }
    }
    const handleProfileClose = () => {
        setAnchorEl(null);

    };

    const isMenuOpen = Boolean(anchorEl);
    const idMenu = isMenuOpen ? 'simple-popover' : undefined;

    const handleAdminPageOpen = () => {
        history.push(ADMIN_ROUTE)
    }

    const handleUserLogout = () => {
        dispatch(userLogout())
        localStorage.removeItem('token')
        handleProfileClose()    
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
                                    >
                                        <ListAltIcon />
                                    </IconButton>
                                    : <div></div>
                            }
                            <IconButton
                                onClick={handleClickProfile}
                            >
                                <AccountCircle />
                            </IconButton>

                        </div>
                    </Toolbar>

                </AppBar>
                <Menu
                    className="profile-menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={idMenu}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleProfileClose}
                >
                    <MenuItem onClick={handleProfileClose}>Профиль</MenuItem>
                    <MenuItem onClick={handleUserLogout}>Выйти</MenuItem>
                </Menu>
            </div>
        </div >
    )
}

