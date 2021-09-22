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
        addCategoryHandler,
        editCategoryHandler,
        questionDeleteRow,
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
                        <IconButton aria-label="edit" onClick={editCategoryHandler}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={questionDeleteRow}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </>
            ) :
                <Tooltip title="Add">
                    <IconButton aria-label="add" onClick={addCategoryHandler}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            }
        </Toolbar>
    )
}

