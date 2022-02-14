import React from 'react';
import './ButtonWrapper.scss'

export const ButtonWrapper = (props) => {
    const { onPrevClick, onNextClick, shape } = props;
    return (
        <div className={`${shape === 'round' ? 'round button-wrapper-container' : 'button-wrapper-container'}`}>
            <button className="prev-button" onClick={() => onPrevClick()}></button>
            <button className="next-button" onClick={() => onNextClick()}></button>
        </div>
    );
}
