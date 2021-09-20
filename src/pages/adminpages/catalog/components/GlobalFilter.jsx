import React from 'react'
import './styles/globalfilter.scss'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

export const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {
    const count = preGlobalFilteredRows.length

    return (
        <div className='search'>
            <div className='searchIcon'>
                <SearchIcon />
            </div>
            <InputBase
                value={globalFilter || ''}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined)
                }}
                placeholder={`${count} records...`}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

