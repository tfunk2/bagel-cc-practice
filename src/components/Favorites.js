import React from 'react'
import BagelCard from './BagelCard'

export default function Favorites({favorites, removeFavorite}) {

    const bagelCards = favorites.map(bagel => {
        return <BagelCard bagel={bagel} removeFavorite={removeFavorite}/>
    })

    return(
        <div className='favorites'>
            <h2>Favorite Bagels</h2>
            <ul>
                {bagelCards}
            </ul>
        </div>
    )
}