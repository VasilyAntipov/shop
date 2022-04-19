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
        mouseDrag: true,
        controls: false,
        mode: 'carousel',
        // controlsPosition: 'bottom',
        // lazyload: false,
        // autoWidth: true,
        // center: true,
        arrowKeys: true,
        autoplay: true,
        autoplayButtonOutput: false,


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
                    <div className="actions">
                        <TinySlider settings={settings}>
                            {items.map((el, index) => (
                                <div key={index} style={{ position: "relative" }}>
                                    <img
                                        className="slider-image"
                                        src={el.img}
                                        data-src={el}
                                        alt=""
                                    // style={imgStyles}
                                    />
                                </div>
                            ))}
                        </TinySlider>
                    </div>
                    <div style={{ marginTop: 30 }}>
                        <h2>Актуальные предложения</h2>
                    </div>
                    <div className="middle-container">
                        <TinySlider settings={settings}>
                            {items.map((el, index) => (
                                <div key={index} style={{ position: "relative" }}>
                                    <img
                                        className="slider-image"
                                        src={el.img}
                                        data-src={el}
                                        alt=""
                                    // style={imgStyles}
                                    />
                                </div>
                            ))}
                        </TinySlider>
                    </div>
                    <div className="bottom-container"></div>
                </div>
            </div>
            <div className="homepage-bottom-container">

            </div>
        </div>
    )
}
