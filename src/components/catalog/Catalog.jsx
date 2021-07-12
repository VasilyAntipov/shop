import React from 'react'
import './catalog.scss'
import { CatalogCard } from '../catalogcard/CatalogCard'
import { useSelector } from 'react-redux'
import { useParams} from 'react-router'
export const Catalog = () => {
    const menu = useSelector(state => state.menu)
    const params = useParams()
    return (
        <div className="catalog">
            {menu.subItems.map((item) => {
                if (item.parent_id === +params.id)
                    return (
                        <CatalogCard name={item.name} key={item.id} />
                    )
            })}
        </div>
    )
}
