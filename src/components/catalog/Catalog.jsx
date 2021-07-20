import React from 'react'
import './catalog.scss'
import { CatalogCard } from '../catalogcard/CatalogCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSubItems, getItems } from '../../selectors'
export const Catalog = () => {
    const menu = useSelector(state => state.menu)
    const params = useParams()
    if (params.id === undefined)
        return (
            <div className="catalog">
                {getItems(menu).map((item) =>
                    <CatalogCard id={item.id} name={item.name} key={item.id} img={item.photo} />
                )}
            </div>
        )

    return (
        <div className="catalog">
            {getSubItems(menu).map((item) => {
                if (item.parent_id === Number(params.id)) {
                    return (
                        <CatalogCard id={item.id} name={item.name} key={item.id} img={item.photo} />
                    )
                }
            })}
        </div>
    )

}
