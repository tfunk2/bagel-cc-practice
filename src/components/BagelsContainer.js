import React from 'react'
import BagelCard from './BagelCard'

export default function BagelsContainer(props) {

    const bagelCards = props.bagels.map(bagel => {
        return <BagelCard bagel={bagel} addToFavorites={props.addToFavorites}/>
    })

    return(
        <div className="bagels-container">
            <ul className="bagels-ul">
                {bagelCards}
            </ul>
        </div>
    )
}