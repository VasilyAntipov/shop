import React from 'react'
import './productfilter.scss'
import { Paper } from '@material-ui/core'
import { PRICE, priceFilter, PRODUCER } from '../../constants'
import { useSelector } from 'react-redux'
import { getUniqueProducers } from '../../selectors'
import { ProductFilterAccordion } from '../productFilterAccordion/ProductFilterAccordion'
import { ProductFilterFlag } from '../productFilterFlag/ProductFilterFlag'
export const ProductFilter = () => {

    const prod = useSelector(state => state.prod)

    if (!prod.isLoaded) {
        return (
            <div className="product-filter">
                <h1>LOADING FILTER...</h1>
            </div>
        );
    }

    return (
        <div className="product-filter">
            <Paper>
                <ProductFilterAccordion
                    accordionArray={priceFilter}
                    accordionName={PRICE}
                    accordionLabel={'Цена'}
                />
                <ProductFilterAccordion
                    accordionArray={getUniqueProducers(prod)}
                    accordionName={PRODUCER}
                    accordionLabel={'Производитель'}
                />
            </Paper>

            <ProductFilterFlag />
        </div >
    )
}
