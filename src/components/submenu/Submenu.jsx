import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeDisplaySubmenu } from '../../actions'

export const Submenu = () => {
    const displaySubmenu = useSelector(state => state.menu.displaySubmenu)
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    console.log(menu.subItems)
    console.log(menu.items)
    console.log(menu.activeId)
    return (
        <Paper className={'submenu ' + displaySubmenu}
            onMouseEnter={() => dispatch(changeDisplaySubmenu('show'))}
            onMouseLeave={() => dispatch(changeDisplaySubmenu('hide'))}
        >
            <div className="content-menu">
                <div>
                    <ul>
                        {menu.subItems.map((item, i) => {
                            if (item.cat1_id === menu.activeId)
                                return (
                                    <li key={i}>
                                        <p>{item.cat1_id} {item.name}</p>
                                    </li>
                                )
                        })}
                    </ul>
                </div>
            </div>
        </Paper>
    )
}
