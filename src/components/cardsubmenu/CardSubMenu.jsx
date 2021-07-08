import './cardsubmenu.scss'
import React from 'react'
import { Paper } from '@material-ui/core'
import { useSelector , useDispatch} from 'react-redux'
import { SubMenuItem } from '../submenuitem/SubMenuItem'
import { showCardSubMenu } from '../../actions'

export const CardSubMenu = ({ anchorEl, id }) => {
    const menu = useSelector(state => state.menu)
    const cardOffsetX = 0;
    const cardOffsetY = -40;
    const dispatch = useDispatch()
    let position = null;
    if (anchorEl) {
        const x = anchorEl.getBoundingClientRect().bottom + cardOffsetY;
        const y = anchorEl.getBoundingClientRect().right + cardOffsetX;
        position = { 'top': x, 'left': y }
    }

    return (
        <Paper
            className={`card-submenu ${menu.cardSubMenuActive ? 'show' : 'hide'}`}
            style={position}
            onMouseEnter = {()=>dispatch(showCardSubMenu(true))}
            onMouseLeave = {()=>dispatch(showCardSubMenu(false))}
        >
            {menu.subItems.map((item) => {
                if (item.parent_id === id) {
                    return (
                        <li key={item.id}>
                            <SubMenuItem
                                id={item.id}
                                size={'normal'}
                                name={item.name}
                                click={() => alert('продукты еще не готовы')}
                            />
                        </li>
                    )
                }
            })}
        </Paper>
    )
}
