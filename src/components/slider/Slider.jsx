import React, { useState, createRef, } from 'react';
import { Slide } from './components/slide/Slide';
import { Indicator } from './components/indicator/Indicator';
import { ButtonWrapper } from './components/buttonWrapper/ButtonWrapper';
import './Slider.scss';

export const Slider = (props) => {

    const {
        slides = [{
            childrenElem: false,
            url: './image1.jpg',
        },
        {
            childrenElem: false,
            url: './image2.jpg',
        },
        {
            childrenElem: false,
            url: './image3.jpg',
        }],
        showIndicator = true,
        height = 500,
        buttonShape = 'square'
    } = props

    let imageContainerRef = createRef();

    const [activeIndex, setActiveIndex] = useState(1)
    const [translateX, setTranslateX] = useState(0)
    const [currentTouchX, setCurrentTouchX] = useState(0)
    const [startSwipe, setStartSwipe] = useState(false)
    const [startTouchX, setStartTouchX] = useState(0)

    const prevSlide = () => {
        const { offsetWidth } = imageContainerRef;
        const newIndex = activeIndex === 1
            ? activeIndex + slides.length - 1
            : activeIndex - 1;
        setActiveIndex(newIndex)
        setTranslateX((newIndex - 1) * offsetWidth)
    }

    const nextSlide = () => {
        if (activeIndex === slides.length) {
            setActiveIndex(index => index - slides.length + 1)
            setTranslateX(0)

        } else {
            const { offsetWidth } = imageContainerRef;
            setActiveIndex(index => index + 1)
            setTranslateX(translateX => translateX + offsetWidth)
        }

    }

    const onWrapperMouseDown = (e) => {
        e.preventDefault();
        setStartTouchX(e.clientX)
        setStartSwipe(true)
    };

    const onWrapperMouseUp = (e) => {
        setStartSwipe(false)
        const touchRelativeX = startTouchX - e.clientX;
        const { offsetWidth } = imageContainerRef;
        const threshold = 0.25;
        const noOfItemsToSwipe = Math.floor(Math.abs(touchRelativeX) / (offsetWidth) + (1 - threshold));
        if (noOfItemsToSwipe > 0) {
            if (touchRelativeX < 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
        setStartTouchX(0)
        setCurrentTouchX(0)
    };


    const onWrapperMouseMove = (e) => {
        if (startSwipe) {
            setCurrentTouchX((startTouchX - e.clientX) * -1)
        }
    }

    return (
        <div className="main-container">
            <div className="slide-container" style={{
                minHeight: (window.innerWidth > 450) ? 450 : window.innerHeight / 3,
            }}>
                <div className="slides-holder" style={{
                    height,
                    transitionDuration: currentTouchX ? '0s' : '0.5s',
                    transform: `translateX(${(translateX - currentTouchX) * -1}px)`,
                }}
                    onMouseDown={onWrapperMouseDown}
                    onMouseUp={onWrapperMouseUp}
                    onMouseMove={onWrapperMouseMove}
                    ref={(node) => {
                        imageContainerRef = node;
                    }}
                >
                    {slides.map((item, index) => <Slide
                        key={index}
                        currentIndex={index}
                        activeIndex={activeIndex}
                        item={item}
                    />)
                    }
                </div>
            </div>
            <ButtonWrapper
                shape={buttonShape}
                onPrevClick={() => prevSlide()}
                onNextClick={() => nextSlide()} />
            {showIndicator && <Indicator
                slider={slides}
                activeIndex={activeIndex}
            />}
        </div>
    )
}