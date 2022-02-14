import React, { cloneElement } from 'react';
import './Slide.scss'

export const Slide = (props) => {
    const { item } = props;
    return (
        <div className="slide-list">
            <div
                className="slide-content"
                style={
                    {
                        background: `url(${item.url}) no-repeat center`,
                        backgroundSize: 'cover'
                    }}>
                {
                    !!item.childrenElem && cloneElement(item.childrenElem)
                }
            </div>
        </div>
    );
}