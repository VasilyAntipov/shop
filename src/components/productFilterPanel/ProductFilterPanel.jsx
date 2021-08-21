import './productfilterpanel.scss'
import React from 'react'
import { Paper } from '@material-ui/core'
import { PopoverCheckbox } from '../popovercheckbox/PopoverCheckbox'
import { useSelector } from 'react-redux'
import { orderListSelector, groupListSelector } from '../../selectors'

export const ProductFilterPanel = () => {
    const orderList = useSelector(orderListSelector)
    const groupList = useSelector(groupListSelector)


    return (
        <Paper className="product-filter-panel">
            <PopoverCheckbox
                checkBox={orderList}
                className="popover sort"
                title="сортировка: "
            />

            <PopoverCheckbox
                checkBox={groupList}
                className="popover group"
                title="группировка: "
            />
        </Paper>
    )
}
