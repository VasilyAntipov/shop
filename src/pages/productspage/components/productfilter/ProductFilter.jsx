import React, { useState } from 'react'
import './productfilter.scss'
import { Paper, Link } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { ProductFilterAccordion } from './productfilteraccordion/ProductFilterAccordion'
import { FlagButton } from './productfilteraccordion/flagbutton/FlagButton'
import { filterItemsSelector, filterIsLoadedSelector } from '../../../../redux/selectors/filterSelectors'
import { clearFiltersAll, showFilterFlag } from '../../../../redux/actions/index'
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

    const handleClickFlag = () => {
        dispatch(showFilterFlag(
            {
                visible: false,
                coordinatsY: null
            }
        ))
    }

    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

    if (!filterIsLoaded) {
        return (
            <div className="product-filter">
                <h1>LOADING FILTER...</h1>
            </div>
        );
    }

    return (
        <div>
            <div className="product-filter">

                <Paper>
                    {filterItems.map((item, index) => {
                        return (
                            <ProductFilterAccordion
                                key={index}
                                filterArray={item.data}
                                filterType={item.type}
                                filterName={item.name}
                                setCoordinates={setCoordinates}
                                coordinates={coordinates}
                            />
                        )
                    })}
                    <Link
                        className="disable-all-filters"
                        onClick={(e) => handleClickClearFilters(e)}
                    >сбросить все фильтры
                    </Link>

                </Paper>

            </div >
            <FlagButton
                x={coordinates.x}
                y={coordinates.y}
                onClick={handleClickFlag}
                title='Показать'
            />
        </div>
    )
}
