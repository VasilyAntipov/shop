import React
, { forwardRef, useRef, useEffect, useState, Fragment } from 'react'
import './styles/enhancedtable.scss'
import { CategoryDialog } from './CategoryDialog';
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
import { useDispatch, useSelector } from 'react-redux'
import { admCatalogTableParentSelector, getMenuItemByIdSelector } from '../../../redux/selectors/menuSelectors'
import { setCatalogTableParent, addCategory, changeOneCategory, deleteCategoryAction } from '../../../redux/actions'
import { Button, Tooltip, IconButton, Typography } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import { createCategory, deleteCategory, updateCategory } from '../../../http/categoryApi'
import { sortHeaders } from '../utils'

const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = useRef()
        const resolvedRef = ref || defaultRef

        useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <Checkbox ref={resolvedRef} {...rest}
                />
            </>
        )
    }
)

export const EnhancedTable = ({
    columns,
    data,
    skipPageReset,
    editable,
    handleRowDelete,
    actionFetchData,
}) => {
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

    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const [category, setCategory] = useState({})
    const [open, setOpen] = useState(false)
    const numSelected = Object.keys(selectedRowIds).length


    const dispatch = useDispatch()
    const getMenuItemById = useSelector(getMenuItemByIdSelector)

    const handleChangePage = (event, newPage) => {
        gotoPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value))
    }

    const questionDeleteRow = event => {
        const { id, name } = selectedFlatRows[0].values
        confirmAlert({
            title: "Подтвердите удаление",
            message: `Вы уверены, что хотите удалить ${name}`,
            buttons: [
                {
                    label: "Yes",
                    onClick: () => handleRowDelete(id)
                },
                {
                    label: "No"
                    // onClick: () => alert("Click No")
                }
            ]
        });
    }

    const addCategoryHandler = () => {
        setCategory({ parentId: admCatalogTableParent.id })
        setOpen(true)
    }

    const editCategoryHandler = () => {
        setCategory(selectedFlatRows[0].values)
        setOpen(true)
    }

    

    const rowClickHandler = (row) => {
        dispatch(setCatalogTableParent(row.values))
    }

    const backToUpHandler = () => {
        const id = admCatalogTableParent.parentId
        dispatch(setCatalogTableParent(getMenuItemById(id)))
    }


    return (
        <TableContainer>
            {
                editable &&
                <Fragment>
                    <CategoryDialog
                        actionFetchData={actionFetchData}
                        category={category}
                        setCategory={setCategory}
                        open={open}
                        setOpen={setOpen}
                    />
                    <TableToolbar
                        questionDeleteRow={questionDeleteRow}
                        editCategoryHandler={editCategoryHandler}
                        addCategoryHandler={addCategoryHandler}
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        setGlobalFilter={setGlobalFilter}
                        globalFilter={globalFilter}
                        numSelected={numSelected}
                        title={admCatalogTableParent.name}
                    />
                </Fragment>
            }


            <MaUTable {...getTableProps()}
                sx={{ minWidth: 650 }} size="small" aria-label="a dense table"
            >
                <TableHead>
                    {headerGroups.map(headerGroup => {
                        return (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
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
                    {admCatalogTableParent.id > 0 &&
                        <TableRow>
                            <TableCell colSpan={columns.length + 1}
                                onClick={backToUpHandler}
                            >
                                <Tooltip title="на верхний уровень">
                                    <IconButton size="small"

                                    >
                                        <ReplyIcon />
                                    </IconButton>
                                </Tooltip>
                                {admCatalogTableParent.name}
                            </TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody >
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()} key={i}>
                                {row.cells.map((cell, index) => {
                                    if (cell.column.id === 'name') {
                                        return (
                                            <TableCell {...cell.getCellProps()}
                                                key={`${index}-${i}`}
                                            >
                                                <div
                                                    className="button-open-catalog"
                                                    onClick={(e) => rowClickHandler(row)}
                                                >
                                                    {cell.value}
                                                </div>
                                            </TableCell>
                                        )
                                    }

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

                {editable &&
                    <TableFooter>
                        <TableRow className="table-footer">
                            {numSelected > 0 &&
                                <p className="num-selected">{`выбрано ${numSelected} п.`}</p>
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
                }
            </MaUTable>
        </TableContainer >
    )
}
