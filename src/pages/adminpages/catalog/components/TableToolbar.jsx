import React from 'react'
import './styles/tabletoolbar.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import { GlobalFilter } from './GlobalFilter'
import IconButton from '@mui/material/IconButton'
import { Toolbar, Tooltip } from '@mui/material/'

export const TableToolbar = props => {
    const {
        numSelected,
        addRowHandler,
        editRowHandler,
        deleteRowHandler,
        preGlobalFilteredRows,
        setGlobalFilter,
        globalFilter,
        title
    } = props

    return (
        <Toolbar
            className="table-toolbar"
        >
            <div className="parent-name title">{title}</div>
            {numSelected > 0
                ? null
                : (
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />)}
            {numSelected === 1 ? (
                <>
                    <Tooltip title="Edit">
                        <IconButton aria-label="edit" onClick={editRowHandler}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteRowHandler}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </>
            ) :
                <Tooltip title="Add">
                    <IconButton aria-label="add" onClick={addRowHandler}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            }
        </Toolbar>
    )
}

