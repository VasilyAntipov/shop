import './productfilterpanel.scss'
import React from 'react'
import { Paper } from '@mui/material'
import { PopoverCheckbox} from '../../../components/popovercheckbox/PopoverCheckbox'
import { useSelector } from 'react-redux'
import { orderListSelector, groupListSelector, filterIsLoadedSelector } from '../../../redux/selectors/filterSelectors'

export const ProductFilterPanel = () => {
    const orderList = useSelector(orderListSelector)
    const groupList = useSelector(groupListSelector)
    const filterIsLoaded = useSelector(filterIsLoadedSelector)

    if (!filterIsLoaded) {
        return (
            <div>
                Loading
            </div>
        )
    }

    return (
        <Paper className="product-filter-panel">
            <PopoverCheckbox
                element="orderIndex"
                checkBox={orderList}
                className="popover sort"
                title="сортировка: "
            />

            <PopoverCheckbox
                element="group"
                checkBox={groupList}
                className="popover group"
                title="группировка: "
            />
        </Paper>
    )
}
