import './pagebutton.scss'
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { addSearchToUrl } from '../../utils'

export const PageButton = ({ id }) => {
    const location = useLocation()
    return (
        <Button
            className="page-number-button"
            component={Link}
            to={{
                pathname: location.pathname,
                search: addSearchToUrl(location, { type: 'page', data: id + 1 }, 'page')
            }}
        >
            {id + 1}
        </Button>
    )
}
