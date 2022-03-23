import './homepage.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { MenuList } from '../../components/menulist/MenuList'
import { SubMenu } from '../../components/menulist/submenu/SubMenu'
import { Slider } from '../../components/slider/Slider'
import { Paper } from '@mui/material'
import {
    mainMenuItemsSelector,
    menuIsLoadedSelector,
    subMenuItemsSelector
} from '../../redux/selectors/menuSelectors'

export const HomePage = () => {

    const mainMenuItems = useSelector(mainMenuItemsSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const subMenuItems = useSelector(subMenuItemsSelector)
    return (
        <div className="homepage-container">
            <div className="homepage-menu">
                <MenuList
                    isLoaded={menuIsLoaded}
                    items={mainMenuItems}
                    subItems={subMenuItems}
                />
            </div>
            <div className="homepage-body">
                <Slider />
            </div>
        </div>
    )
}
