import React from 'react'
import './catalogpage.scss'
import { Catalog } from '../catalog/Catalog'
import { Navbar } from '../navbar/Navbar'
export const CatalogPage = () => {
    return (
        <div>
            <Navbar />
            <Catalog />
        </div>
    )
}
