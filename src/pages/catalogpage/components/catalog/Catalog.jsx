import React from 'react'
import './catalog.scss'
import { CatalogCard } from './catalogcard/CatalogCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { subMenuItemsSelector, mainMenuItemsSelector } from '../../../../redux/selectors/menuSelectors'
export const Catalog = () => {
    const mainItems = useSelector(mainMenuItemsSelector)
    const subItems = useSelector(subMenuItemsSelector)
    const { id } = useParams()

    if (id === undefined)
        return (
            <div className="catalog">
                {mainItems.map((item) =>
                    <CatalogCard
                        id={item.id}
                        name={item.name}
                        key={item.id}
                        img={item.img} />
                )}
            </div>
        )

    return (
        <div className="catalog">
            {subItems
                .filter(({ parentId }) => parentId === Number(id))
                .map((item) => {
                    return (
                        <CatalogCard
                            id={item.id}
                            name={item.name}
                            key={item.id}
                            img={item.img}
                        />
                    )
                })}
        </div>
    )

}
