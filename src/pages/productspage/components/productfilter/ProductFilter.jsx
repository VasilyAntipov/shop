import React, { useState,  useEffect } from 'react'
import './productfilter.scss'
import { Paper, Link } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ProductFilterAccordion } from './productfilteraccordion/ProductFilterAccordion'
import { clearFiltersAll } from '../../../../redux/actions/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { addSearchToUrl } from '../../../../utils/func'


const getArrayFilters = (items) => {
    return items.map(item => {
        return {
            type: item.type,
            items: item.data.map(el => el.id)
        }
    })
}

export const ProductFilter = (props) => {

    const { filters } = props
    const location = useLocation()
    const navigate = useNavigate();

    const search = addSearchToUrl(location, getArrayFilters(filters), 'filters')

    const [checkers, setCheckers] = useState(filters)


    const handleClickClearFilters = (e) => {
        navigate({ search })
    }

    const handleClickApply = () => {
        // const search = {}
        console.log(checkers)
        navigate({ search })
    };


    return (
        <div>
            <div className="product-filter">
                <Paper>
                    {filters.map((item, index) => {
                        return (
                            <ProductFilterAccordion
                                key={index}
                                accItems={item.data}
                                accType={item.type}
                                accName={item.name}
                            />
                        )
                    })}
                    <Link
                        className="apply-button"
                        onClick={handleClickApply}
                    >Применить фильтры
                    </Link>
                    <Link
                        className="disable-all-button"
                        onClick={(e) => handleClickClearFilters(e)}
                    >сбросить все фильтры
                    </Link>
                </Paper>
            </div >
        </div>
    )
}
