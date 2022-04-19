import React from 'react'
import './productfilter.scss'
import { Paper, Link } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { ProductFilterAccordion } from '../productfilteraccordion/ProductFilterAccordion'
import { ProductFilterFlag } from '../productfilterflag/ProductFilterFlag'
import { filterItemsSelector, filterIsLoadedSelector } from '../../../redux/selectors/filterSelectors'
import { clearFiltersAll, showFilterFlag} from '../../../redux/actions/index'
export const ProductFilter = () => {

    const dispatch = useDispatch()
    const filterItems = useSelector(filterItemsSelector)
    const filterIsLoaded = useSelector(filterIsLoadedSelector)

    const handleClickClearFilters = (e) => {
        dispatch(clearFiltersAll())
        dispatch(showFilterFlag({
            visible: true,
            coordinatsY: e.pageY - 30
        }));

    }

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
                <Link
                    className="disable-all-filters"
                    onClick={(e) => handleClickClearFilters(e)}
                >сбросить все фильтры
                </Link>
            </Paper>
            <ProductFilterFlag />
        </div >
    )
}
