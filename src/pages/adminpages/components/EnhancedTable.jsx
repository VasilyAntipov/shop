import React
, { forwardRef, useRef, useEffect, useState, Fragment } from 'react'
import './styles/enhancedtable.scss'
import { DialogForm } from './DialogForm';
import { confirmAlert } from 'react-confirm-alert'
import "react-confirm-alert/src/react-confirm-alert.css";
import Checkbox from '@mui/material/Checkbox'
import MaUTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import { TablePaginationActions } from './TablePaginationActions'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { TableToolbar } from './TableToolbar'
import {
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
    useTable,
} from 'react-table'
import { useSelector } from 'react-redux'
import { admCatalogTableParentSelector } from '../../../redux/selectors/menuSelectors'
import { Tooltip, IconButton } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import { CATALOG, PRODUCT } from '../catalog/utils/constants';

const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = useRef()
        const resolvedRef = ref || defaultRef

        useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <Checkbox ref={resolvedRef} {...rest} size="small"
            />
        )
    }
)

export const EnhancedTable = (props) => {
    const {
        columns,
        data,
        skipPageReset,
        deleteRow,
        sortHeaders,
        navigateLevelUpHandler,
        navigateEnterHandler,
        classes,
        typeTable,
        addRow,
        editRow,
        dialogOptions,
        fetchData,
        setFetchData,
        fetchDataAction,
    } = props

    const {
        selectedFlatRows,
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        gotoPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    } = useTable(
        {
            columns,
            data,
            autoResetPage: !skipPageReset,
            initialState: {
                sortBy: [
                    {
                        id: 'index',
                        desc: false
                    }
                ]
            }
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.allColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,

            ])
        }
    )

    const [open, setOpen] = useState(false)
    const numSelected = Object.keys(selectedRowIds).length
    const admParent = useSelector(admCatalogTableParentSelector)

    const handleChangePage = (event, newPage) => {
        gotoPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value))
    }

    const deleteRowHandler = () => {
        const { id, name } = selectedFlatRows[0].original
        confirmAlert({
            title: "Подтвердите удаление",
            message: `Вы уверены, что хотите удалить ${name}`,
            buttons: [
                {
                    label: "Да",
                    onClick: () => deleteRow(id)
                },
                {
                    label: "Нет"
                }
            ]
        });
    }

    const addRowHandler = () => {
        addRow()
        setOpen(true)
    }

    const editRowHandler = () => {
        editRow(selectedFlatRows[0].original)
        setOpen(true)
    }


    return (
        <TableContainer
            className={classes}>
            <Fragment>
                <DialogForm
                    open={open}
                    setOpen={setOpen}
                    options={dialogOptions}
                    fetchData={fetchData}
                    setFetchData={setFetchData}
                    fetchDataAction={fetchDataAction}
                />

                {<TableToolbar
                    deleteRowHandler={deleteRowHandler}
                    editRowHandler={editRowHandler}
                    addRowHandler={addRowHandler}
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={globalFilter}
                    numSelected={numSelected}
                    title={admParent.name}
                />}
            </Fragment>


            <MaUTable {...getTableProps()}
                sx={{ minWidth: 650 }} size="small" aria-label="a dense table"
            >
                <TableHead>
                    {headerGroups.map(headerGroup => {
                        return (
                            <TableRow
                                className="tablehead-top"
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map(column => (
                                    <TableCell
                                        key={column.id}
                                        {...(sortHeaders.includes(column.id)
                                            ? column.getHeaderProps(column.getSortByToggleProps())
                                            : column.getHeaderProps())
                                        }
                                    >
                                        {column.render('Header')}
                                        {sortHeaders.includes(column.id)
                                            ? (
                                                <TableSortLabel
                                                    active={column.isSorted}
                                                    direction={column.isSortedDesc ? 'desc' : 'asc'}
                                                />
                                            )
                                            : null}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    })}
                    {admParent?.id > 0 && typeTable === CATALOG &&
                        <TableRow>
                            <TableCell colSpan={columns.length + 1}
                                onClick={navigateLevelUpHandler}
                            >
                                <Tooltip title="на верхний уровень">
                                    <IconButton size="small">
                                        <ReplyIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody >
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow
                                {...row.getRowProps()}
                                key={i}
                                className="button-open-catalog"
                                onClick={(e) => {
                                    if (typeTable === CATALOG)
                                        navigateEnterHandler(e, row)
                                }}
                            >
                                {row.cells.map((cell, index) => {
                                    if (cell.column.id === 'selection') {
                                        return (
                                            <TableCell {...cell.getCellProps()}
                                                key={`${index}-${i}`}
                                            >
                                                {cell.render('Cell')}
                                            </TableCell>
                                        )
                                    }

                                    return (
                                        <TableCell {...cell.getCellProps()}
                                            key={`${index}-${i}`}
                                        >
                                            {cell.value}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow className="table-footer">
                        {numSelected > 0 &&
                            <td>
                                <p className="num-selected">
                                    {`выбрано ${numSelected} п.`}
                                </p>
                            </td>
                        }
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: 'All', value: data.length },
                            ]}
                            colSpan={columns.length + 1}
                            count={data.length}
                            rowsPerPage={pageSize}
                            page={pageIndex}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </MaUTable>
        </TableContainer >
    )
}
