import React from 'react'
import './productfilter.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { ProductFilterAccordion } from '../productFilterAccordion/ProductFilterAccordion'
import { ProductFilterFlag } from '../productFilterFlag/ProductFilterFlag'
import { useLocation } from 'react-router-dom'

export const ProductFilter = () => {

    const filters = useSelector(state => state.filters)
    const location = useLocation();
    
    if (location.search) {
        console.log(location.search)
    }

    if (!filters.isLoaded) {
        return (
            <div className="product-filter">
                <h1>LOADING FILTER...</h1>
            </div>
        );
    }

    return (
        <div className="product-filter">
            <Paper>
                {filters.items.map((filter, index) => {
                    return (
                        <ProductFilterAccordion
                            key={index}
                            filterArray={filter.data}
                            filterType={filter.type}
                            filterName={filter.name}
                        />
                    )
                })}
            </Paper>
            <ProductFilterFlag />
        </div >
    )
}
