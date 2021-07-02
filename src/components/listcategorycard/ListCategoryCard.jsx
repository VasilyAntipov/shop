import React from 'react'
import CategoryCard from '../categorycard/Categorycard'

export default function ListCategoryCard({props}) {
    const cards = props.cards
    const listItems = cards.map((item) => {
        <CategoryCard />
    })
    return (
        <ul>{listitems}</ul>
    )
}
