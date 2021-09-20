import React
, { forwardRef, useRef, useEffect, useState } from 'react'
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
import {TablePaginationActions} from './TablePaginationActions'
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
import { admCatalogTableParentSelector, getMenuItemByIdSelector, getMenuItemsByParentIdSelector } from '../../../../redux/selectors/menuSelectors'
import { setCatalogTableParent, addCategory, changeOneCategory, deleteCategoryAction } from '../../../../redux/actions'
import { Button, Tooltip, IconButton } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import { createCategory, deleteCategory, updateCategory } from '../../../../http/categoryApi'


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

export const EnhancedTable = ({ columns, data, skipPageReset }) => {
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


    const dispatch = useDispatch()

    const getMenuItemById = useSelector(getMenuItemByIdSelector)

    const handleChangePage = (event, newPage) => {
        gotoPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value))
    }

    const deleteCategoryHandler = event => {
        const { id, name } = selectedFlatRows[0].values
        confirmAlert({
            title: "Подтвердите удаление",
            message: `Вы уверены, что хотите удалить ${name}`,
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteCategory(id)
                        .then(() => {
                            dispatch(deleteCategoryAction(id))
                        })
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

    const actionFetchData = () => {
        const formData = new FormData()
        for (let key in category) {
            formData.append(key, category[key])
        }
        if (category.hasOwnProperty('id')) {
            updateCategory(formData)
                .then(data => {
                    dispatch(changeOneCategory(data))
                })
        } else {
            createCategory(formData)
                .then(data => {
                    dispatch(addCategory(data))
                })
        }
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
            <CategoryDialog
                actionFetchData={actionFetchData}
                category={category}
                setCategory={setCategory}
                open={open}
                setOpen={setOpen}
            />
            <TableToolbar
                numSelected={Object.keys(selectedRowIds).length}
                deleteCategoryHandler={deleteCategoryHandler}
                editCategoryHandler={editCategoryHandler}
                addCategoryHandler={addCategoryHandler}
                preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={globalFilter}
            />
            <MaUTable {...getTableProps()} isSorted={'index'}>
                <TableHead>
                    {headerGroups.map(headerGroup => {
                        return (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <TableCell
                                        key={column.id}
                                        {...(column.id === 'selection'
                                            ? column.getHeaderProps()
                                            : column.getHeaderProps(column.getSortByToggleProps()))}
                                    >
                                        {column.render('Header')}
                                        {column.id !== 'selection' ? (
                                            <TableSortLabel
                                                active={column.isSorted}
                                                direction={column.isSortedDesc ? 'desc' : 'asc'}
                                            />
                                        ) : null}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    })}
                    {admCatalogTableParent.id &&
                        <TableRow>
                            <TableCell colSpan={6}>
                                <Tooltip title="на верхний уровень">
                                    <IconButton size="small"
                                        onClick={backToUpHandler}
                                    >
                                        {`к ${admCatalogTableParent.name}`}
                                        <ReplyIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody useSortBy='index'>
                    {page.map((row, i) => {
                        prepareRow(row)
                        console.log(row.id)
                        return (
                            <TableRow {...row.getRowProps()} key={row.id}>
                                {row.cells.map(cell => {
                                    if (cell.column.id === 'name') {
                                        return (
                                            <TableCell {...cell.getCellProps()}
                                            >
                                                <Button
                                                    // color="black"
                                                    style={{ textTransform: 'none' }}
                                                    onClick={(e) => rowClickHandler(row)}
                                                >
                                                    {cell.value}
                                                </Button>
                                            </TableCell>
                                        )
                                    }

                                    if (cell.column.id === 'selection') {
                                        return (
                                            <TableCell {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </TableCell>
                                        )
                                    }

                                    return (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.value}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: 'All', value: data.length },
                            ]}
                            colSpan={6}
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
        </TableContainer>
    )
}
