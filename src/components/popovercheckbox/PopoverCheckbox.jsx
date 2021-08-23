import './popovercheckbox.scss'
import React, { useState } from 'react'
import { Popover, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { addSearchToUrl } from '../../utils'

export const PopoverCheckbox = ({ className, checkBox, title, element }) => {


    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const activeItemId = params.get(element);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClickItem = (e, id) => {
        handleClose(e)
    }


    return (
        <div className={className}>
            <span className="sort">{title}</span>
            <Link onClick={(e) => handleClick(e)}>
                {checkBox[activeItemId-1].title}
            </Link>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={(e) => handleClose(e)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {checkBox.map(item => {
                    return (
                        <RouterLink
                            className={"popover-list-item"}

                            to={{
                                pathname: location.pathname,
                                search: addSearchToUrl(location, { type: element, data: item.id }, element)
                            }}
                            key={item.id}
                            onClick={(e) => handleClickItem(e, item.id)}
                        >
                            {item.title}
                        </RouterLink>
                    )
                })}
            </Popover>
        </div >
    )
}
