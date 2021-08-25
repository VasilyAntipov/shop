import './pagepanel.scss'
import React from 'react'
import { Paper, } from '@material-ui/core'
import { productCountSelector } from '../../redux/selectors'
import { useSelector } from 'react-redux'
import { PRODUCT_LIMIT, COUNT_BUTTONS } from '../../utils/constants'
import { useLocation } from 'react-router'
import { PageButton } from '../pagebutton/PageButton'
import { PageButtonArrow } from '../pagebuttonarrow/PageButtonArrow'
export const PagePanel = () => {

    const location = useLocation()
    const productCount = useSelector(productCountSelector)
    const pagesCount = Math.ceil(productCount / PRODUCT_LIMIT)
    const params = new URLSearchParams(location.search);
    const activePage = params.get('page') || 1;
    const countButtons = pagesCount < COUNT_BUTTONS
        ? pagesCount
        : COUNT_BUTTONS

    const pagesLinks = Array.from(Array(countButtons))

    return (
        <div className="page-panel">
            <Paper className="pages" >
                <PageButtonArrow
                    direction="prev"
                    count={pagesCount}
                    activePage={activePage}
                />
                {pagesLinks.map((_, i) => {
                    return (
                        <PageButton
                            key={i}
                            id={i}
                        />
                    )
                })}
                <PageButtonArrow
                    direction="next"
                    count={pagesCount}
                    activePage={activePage}
                />
            </Paper>

        </div>
    )
}
