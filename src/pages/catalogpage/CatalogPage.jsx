import React from 'react'
import './catalogpage.scss'
import { Catalog } from '../../components/catalog/Catalog'
import { BreadCrumbs } from '../../components/breadcrumbs/BreadCrumbs'
export const CatalogPage = () => {
    return (
        <div>
            <BreadCrumbs />
            <Catalog />
        </div>
    )
}
