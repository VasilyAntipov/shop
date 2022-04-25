import './homepage.scss'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { initTopProducts } from '../../redux/actions'
import { homeIsLoadedSelector, homeItemsSelector } from '../../redux/selectors/homeSelector'
import { IMAGES_URL } from '../../utils/constants'

export const HomePage = () => {

    const dispatch = useDispatch()

    const mainMenuItems = useSelector(mainMenuItemsSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const subMenuItems = useSelector(subMenuItemsSelector)
    const topProducts = useSelector(homeItemsSelector)
    const topProductsIsLoaded = useSelector(homeIsLoadedSelector)



    const settings1 = {
        nav: false,
        mouseDrag: true,
        controls: false,
        mode: 'carousel',
        arrowKeys: true,
        autoplay: true,
        autoplayButtonOutput: false,
    };

    const settings2 = {
        nav: false,
        mouseDrag: true,
        // controls: true,
        mode: 'carousel',
        arrowKeys: true,
        autoplayButtonOutput: false,
        items: 5
    };

    const items = [
        { img: 'image1.jpg' },
        { img: 'image2.jpg' }
    ]


    useEffect(() => {
        dispatch(initTopProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        <TinySlider settings={settings1}>
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
                    <div style={{ marginTop: 50, marginBottom: 20 }}>
                        <h2>Актуальные предложения</h2>
                    </div>
                    <div className="middle-container">
                        {
                            topProductsIsLoaded && <TinySlider settings={settings2}>
                                {topProducts.map((el, index) => (
                                    <div key={index} style={{ position: "relative" }}>
                                        <img
                                            className="slider-image"
                                            src={IMAGES_URL + `/${el.img}`}
                                            data-src={el}
                                            alt=""
                                            style={{ objectFit: "contain", width: 'auto', height: 100 }}
                                        />
                                    </div>
                                ))}
                            </TinySlider>
                        }
                    </div>
                    <div className="bottom-container"></div>
                </div>
            </div>
            <div className="homepage-bottom-container">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quae.</p>
            </div>
        </div>
    )
}
