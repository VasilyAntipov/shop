import React from 'react'
import './ProductModal.scss'
import {Slider} from '../slider/Slider'

export const ProductModal = (props) => {
    const { modalIsActive, setModalIsActive } = props
    return (
        <div
            id="modal-wrapper"
            onClick={(e) => {
                if (e.target.id === 'modal-wrapper') {
                    setModalIsActive(false)
                }
            }}
        >
            <div
                className="product-modal"
            >
                
                <Slider />
                модалка для продукта
            </div>
        </div>
    )
}
