import React from 'react'
import './catalog.scss'
import { CatalogCard } from '../catalogcard/CatalogCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { subMenuItemsSelector, mainMenuItemsSelector } from '../../selectors'
export const Catalog = () => {
    const mainItems = useSelector(mainMenuItemsSelector)
    const subItems = useSelector(subMenuItemsSelector)
    const params = useParams()

    if (params.id === undefined)
        return (
            <div className="catalog">
                {mainItems.map((item) =>
                    <CatalogCard id={item.id} name={item.name} key={item.id} img={item.photo} />
                )}
            </div>
        )

    return (
        <div className="catalog">
            {subItems.map((item) => {
                if (item.parentId === Number(params.id)) {
                    return (
                        <CatalogCard id={item.id} name={item.name} key={item.id} img={item.photo} />
                    )
                } else
                    return null

            })}
        </div>
    )

}
