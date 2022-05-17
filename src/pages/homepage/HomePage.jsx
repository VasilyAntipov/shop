import './homepage.scss'
import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MenuList } from '../../components/menulist/MenuList'
import {
    mainMenuItemsSelector,
    menuIsLoadedSelector,
    subMenuItemsSelector
} from '../../redux/selectors/menuSelectors'
import 'react-multi-carousel/lib/styles.css';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { initTopProducts } from '../../redux/actions'
import { homeIsLoadedSelector, homeItemsSelector } from '../../redux/selectors/homeSelector'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGES_URL, PRODUCT_ROUTE } from '../../utils/constants'


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
        controls: false,
        mode: 'carousel',
        autoplayButtonOutput: false,
        items: 5
    };

    const items = [
        { img: 'image1.jpg' , link:'/delivery'},
        { img: 'image2.jpg' , link: '/reg'}
    ]

    const navigate = useNavigate();
    const handleOnClick = useCallback((link) => navigate(link), [navigate]);


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
                        <TinySlider
                            settings={settings1}
                        >
                            {items.map((el, index) => (
                                <div key={index} style={{ position: "relative" }}
                                    onClick={()=>handleOnClick(el.link)}
                                >
                                    <img
                                        className="slider-image actions"
                                        src={el.img}
                                        data-src={el}
                                        alt=""
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
                                    <Link
                                        className={`link-item`}
                                        to={PRODUCT_ROUTE + `/${el.id}`}
                                        key={index} style={{ position: "relative", textAlign: 'center', margin:5}}
                                    >
                                        <img
                                            onClick={() => {

                                            }}
                                            className="slider-image actual"
                                            src={IMAGES_URL + `/${el.img}`}
                                            data-src={el}
                                            alt=""
                                            style={{ objectFit: "contain", width: 'auto', height: 100 }}
                                        />
                                        <div style={{ color: 'black' }}>{el.name}
                                        </div>
                                    </Link>
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
