import React from 'react'
import { Route } from 'react-router'
import './OfferDetails.css'


export default function OfferDetails(props) {

    const offerId = props.match.params.offerId;

    

    return (
        <div>
            <h1 className="test-heading">This is Offer details page for {offerId}</h1>
        </div>
        
    )
}
