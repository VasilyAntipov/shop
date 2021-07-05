import React from 'react'
import {CategoryCard} from '../categorycard/Categorycard'

export const ListCategoryCard = ({ props }) => {
    const cards = props.cards
    const listItems = cards.map((item) => {
        <CategoryCard />
    })
    return (
        <ul>{listitems}</ul>
    )
}
