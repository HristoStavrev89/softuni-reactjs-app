import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';

import './OfferDetails.css'



export default function OfferDetails(props) {

    const [ details, setDetails ] = useState();
    const offerId = props.match.params.offerId;
    
    
    useEffect(() => {
        db.collection("cars")
        .doc(offerId)
        .get()
        .then(response => {
            const currentOffer = response.data();
            setDetails(currentOffer)
        })
    }, [])


        console.log(details);
    

    return (
        <>
            <div>
                <h1 className="test-heading">This is Offer details page for {details && details.brand}</h1>

            </div>

        </>
    )
}
