import React from 'react'
import './styles/tabletoolbar.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import { GlobalFilter } from './GlobalFilter'
import IconButton from '@mui/material/IconButton'
import { Toolbar, Typography, Tooltip } from '@mui/material/'

export const TableToolbar = props => {
    const {
        numSelected,
        addCategoryHandler,
        editCategoryHandler,
        deleteCategoryHandler,
        preGlobalFilteredRows,
        setGlobalFilter,
        globalFilter,
    } = props

    return (
        <Toolbar
            className="table-toolbar"
        >
            {numSelected > 0
                ? (
                    <Typography
                        className="title"
                        color="inherit"
                        variant="subtitle1"
                    >
                        {numSelected} selected
                    </Typography>
                )
                : (<div className="title">
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    /></div>)}
            {numSelected === 1 ? (
                <>
                    <Tooltip title="Edit">
                        <IconButton aria-label="edit" onClick={editCategoryHandler}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteCategoryHandler}>
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

