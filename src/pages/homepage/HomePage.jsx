import './homepage.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { MenuList } from '../../components/menulist/MenuList'
import { SubMenu } from '../../components/menulist/submenu/SubMenu'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'
import {
    mainMenuItemsSelector,
    menuIsLoadedSelector,
    subMenuItemsSelector
} from '../../redux/selectors/menuSelectors'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export const HomePage = () => {

    const mainMenuItems = useSelector(mainMenuItemsSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const subMenuItems = useSelector(subMenuItemsSelector)

    const settings = {
        // lazyload: true,
        nav: false,
        mouseDrag: true
    };
    const items = [
        { img: 'image1.jpg' },
        { img: 'image2.jpg' }
    ]

    return (
        <div className="homepage-container">
            <div className="homepage-top-container">
                <div className="homepage-menu">
                    <MenuList
                        isLoaded={menuIsLoaded}
                        items={mainMenuItems}
                        subItems={subMenuItems}
                    />
                </div>
                <div className="homepage-body">
                    <div className="top-container">
                        <div className="actions" style={{overflow:'hidden' , width: 500}}>
                            <TinySlider settings={settings}>
                                {items.map((el, index) => (
                                    <div key={index} style={{ position: "relative"}}>
                                        <img
                                            className={`tns-lazy-img`}
                                            src={el.img}
                                            data-src={el}
                                            alt=""
                                        // style={imgStyles}
                                        />
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                    <div style={{ marginTop: 15, marginBottom: 15 }}>
                        <h2>Актуальные предложения</h2>
                    </div>
                    <div className="middle-container">

                    </div>
                    <div className="bottom-container"></div>
                </div>
            </div>
            <div className="homepage-bottom-container">

            </div>
        </div>
    )
}
