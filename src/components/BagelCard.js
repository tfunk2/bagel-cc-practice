import React from 'react'

export default function BagelCard({bagel, addToFavorites, removeFavorite}) {

    function handleClick(){
        if (addToFavorites) {
            addToFavorites(bagel)
        } else {
            removeFavorite(bagel)
        }
    }

    return (
        <li className="bagel-card" onClick={() => handleClick()}>
            <h1>{bagel.type}</h1>
        </li>
    )
}