import React from 'react'
import { Link } from 'react-router-dom'
import { addSearchToUrl } from '../../../../../utils/func'
import { useLocation } from 'react-router'
import { IconButton } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const PageButtonArrow = ({ direction, count, activePage }) => {
    const location = useLocation()
    let disable = false;
    if (direction === 'prev' && +activePage === 1) {
        disable = true
    }
    if (direction === 'next' && +activePage === count) {
        disable = true
    }

    const data = direction === 'next'
        ? Number(activePage) + 1
        : Number(activePage) - 1
    const icon = direction === 'next'
        ? <ChevronRightIcon />
        : <ChevronLeftIcon />

    return (
        <IconButton
            disabled={disable}
            color="primary"
            aria-label={`${direction}-page`}
            component={Link}
            to={{
                pathname: location.pathname,
                search: addSearchToUrl(location, { type: 'page', data }, 'page')
            }}
        >
            {icon}
        </IconButton>
    )
}
