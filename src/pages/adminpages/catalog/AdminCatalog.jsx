import React, { useState, useMemo, useEffect } from 'react'
import { EnhancedTable } from './components/EnhancedTable'
import './admincatalog.scss'
import { useSelector } from 'react-redux'
import { admCatalogTableParentSelector, getMenuItemsByParentIdSelector, menuIsLoadedSelector } from '../../../redux/selectors/menuSelectors'
import { productItemsSelector } from '../../../redux/selectors/productSelectors'
import { columns } from './utils'
import { CircularProgress } from '@mui/material'
export const AdminCatalog = () => {

    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const [skipPageReset, setSkipPageReset] = useState(false)
    const data = useSelector(getMenuItemsByParentIdSelector)

    const updateMyData = () => {
        setSkipPageReset(true)

    }


    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page catalog">
            <EnhancedTable
                columns={columns}
                data={data}
                skipPageReset={skipPageReset}
                updateMyData={updateMyData}
            />
        </div>
    )
}