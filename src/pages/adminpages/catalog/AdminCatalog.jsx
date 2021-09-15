import React, { useState, useMemo, useEffect } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { EnhancedTable } from './components/EnhancedTable'
import './admincatalog.scss'
import { useSelector } from 'react-redux'
import { admCatalogTableParentSelector, getMenuItemsByParentIdSelector, menuIsLoadedSelector } from '../../../redux/selectors/menuSelectors'
import { columns } from './utils'
import { CircularProgress } from '@material-ui/core'
export const AdminCatalog = () => {

    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const admCatalogTableParent = useSelector(admCatalogTableParentSelector)
    const getMenuItemsByParentId = useSelector(getMenuItemsByParentIdSelector)
    const data =  getMenuItemsByParentId(admCatalogTableParent.id)
    const [skipPageReset, setSkipPageReset] = React.useState(false)

    
    const updateMyData = (rowIndex, columnId, value) => {
        setSkipPageReset(true)
    }

    

    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page catalog">
            <EnhancedTable
                columns={columns}
                data={data}
                updateMyData={updateMyData}
                skipPageReset={skipPageReset}
            />
        </div>
    )
}