import React from 'react'

import { CategoryDialog } from './CategoryDialog'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import {GlobalFilter} from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Toolbar, Typography, Tooltip } from '@material-ui/core/'
import { useSelector } from 'react-redux'
import { admCatalogTableParentSelector } from '../../../../redux/selectors/menuSelectors'

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}))

export const TableToolbar = props => {
    const classes = useToolbarStyles()
    const {
        numSelected,
        addCategoryHandler,
        editCategoryHandler,
        deleteCategoryHandler,
        preGlobalFilteredRows,
        setGlobalFilter,
        globalFilter,
        selectedFlatRows
    } = props

    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)

    const addCategoryData = {
        name: '',
        parentId: admCatalogTableParent.id,
        img: null,
    }

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0
                ? (
                    <Typography
                        className={classes.title}
                        color="inherit"
                        variant="subtitle1"
                    >
                        {numSelected} selected
                    </Typography>
                )
                : (<div className={classes.title}>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    /></div>)}
            {numSelected === 1 && selectedFlatRows.length > 0 ? (
                <>
                    <Tooltip title="Edit">
                        <CategoryDialog
                            actionCategoryHandler={editCategoryHandler}
                            dataOriginal={selectedFlatRows[0].original}
                            dialogType='Edit'
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteCategoryHandler}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </>
            ) :
                <Tooltip title="Add">
                    <CategoryDialog
                        actionCategoryHandler={addCategoryHandler}
                        dataOriginal={addCategoryData}
                        dialogType='Add'
                    />
                </Tooltip>
            }
        </Toolbar>
    )
}

// TableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired,
//     addCategoryHandler: PropTypes.func.isRequired,
//     editCategoryHandler: PropTypes.func.isRequired,
//     deleteCategoryHandler: PropTypes.func.isRequired,
//     setGlobalFilter: PropTypes.func.isRequired,
//     preGlobalFilteredRows: PropTypes.array.isRequired,
//     globalFilter: PropTypes.string.isRequired,
// }


