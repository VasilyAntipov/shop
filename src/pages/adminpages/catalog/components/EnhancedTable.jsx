import React
, { forwardRef, useRef, useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import "react-confirm-alert/src/react-confirm-alert.css";
import Checkbox from '@material-ui/core/Checkbox'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TablePaginationActions from './TablePaginationActions'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
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
import { Button, Tooltip, IconButton } from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply';
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

export const EnhancedTable = ({
    columns,
    data,
    skipPageReset,
}) => {
    const {
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        gotoPage,
        setPageSize,
        selectedFlatRows,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize, selectedRowIds, globalFilter, selectedRow },
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

    const dispatch = useDispatch()
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const getMenuItemById = useSelector(getMenuItemByIdSelector)
    const handleChangePage = (event, newPage) => {
        gotoPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value))
    }

    const deleteCategoryHandler = event => {
        const id = selectedFlatRows[0].values.id
        confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this.",
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

    const addCategoryHandler = category => {
        const formData = new FormData()
        formData.append('name', category.name)
        formData.append('img', category.file)
        if (category.parentId) formData.append('parentId', category.parentId)
        if (category.index) formData.append('index', category.index)
        createCategory(formData)
            .then(data => {
                dispatch(addCategory(data))
            })
    }

    const editCategoryHandler = category => {
        const formData = new FormData()
        formData.append('id', category.id)
        formData.append('name', category.name)
        if (category.parentId) formData.append('parentId', category.parentId)
        if (category.file) formData.append('img', category.file)
        if (category.index) formData.append('index', category.index)
        updateCategory(formData)
            .then(data => {
                dispatch(changeOneCategory(data))
            })
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
            <TableToolbar
                numSelected={Object.keys(selectedRowIds).length}
                selectedFlatRows={selectedFlatRows}
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
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    if (cell.column.id === 'name') {
                                        return (
                                            <TableCell {...cell.getCellProps()}>
                                                <Button
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
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </MaUTable>
        </TableContainer>
    )
}
