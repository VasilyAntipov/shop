import { Link } from '@material-ui/core'
import React from 'react'

export const SubMenuItem = ({ name }) => {
    return (
        <Link
            color={'textPrimary'}
            underline={'none'}
        >{name}</Link>

    )
}