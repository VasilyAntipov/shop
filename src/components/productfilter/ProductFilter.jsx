import React from 'react'
import './productfilter.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { ProductFilterAccordion } from '../productFilterAccordion/ProductFilterAccordion'
import { ProductFilterFlag } from '../productFilterFlag/ProductFilterFlag'
import { useLocation } from 'react-router-dom'
import { filterItemsSelector, filterIsLoadedSelector } from '../../selectors'

export const ProductFilter = () => {

    const filterItems = useSelector(filterItemsSelector)
    const filterIsLoaded = useSelector(filterIsLoadedSelector)

    if (!filterIsLoaded) {
        return (
            <div className="product-filter">
                <h1>LOADING FILTER...</h1>
            </div>
        );
    }

    return (
        <div className="product-filter">
            <Paper>
                {filterItems.map((item, index) => {
                    return (
                        <ProductFilterAccordion
                            key={index}
                            filterArray={item.data}
                            filterType={item.type}
                            filterName={item.name}
                        />
                    )
                })}
            </Paper>
            <ProductFilterFlag />
        </div >
    )
}
