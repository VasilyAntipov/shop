import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function Submenu() {
    const displaySubmenu = useSelector(state => state.menu.displaySubmenu)
    return (
        <Paper className={'submenu ' + displaySubmenu}>
            <div className="content-menu">
            </div>
        </Paper>
    )
}
