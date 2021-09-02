import React from 'react';
import clsx from 'clsx';
import {
    Link,
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import EditIcon from '@material-ui/icons/Edit';
import { lighten, makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles((theme) => ({
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
}));


export const EnhancedTableToolbar = ({ numSelected, tableTitle }) => {
    const classes = useToolbarStyles();
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} выбрано
                </Typography>
            ) : (
                <Link>
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        {tableTitle}
                    </Typography>
                </Link>
            )}

            {numSelected === 1 && (
                <Tooltip title="Редактировать">
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Удалить">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Фильтр">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}


        </Toolbar>
    );
};