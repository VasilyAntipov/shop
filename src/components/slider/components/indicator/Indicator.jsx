import React from 'react';
import './Indicator.scss'
export const Indicator = (props) => {
    const { slider, activeIndex } = props;
    return (
        <div className="indicator-container">
            <ul className="indicator-wrapper-ul">
                {slider.map((item, index) =>
                    <li
                        key={index}
                        className="indicate"
                        style={
                            (index + 1 === activeIndex)
                                ? { background: 'rgba(0, 0, 0, 0.3)' }
                                : {}
                        }
                    />
                )}
            </ul>
        </div>
    );
}