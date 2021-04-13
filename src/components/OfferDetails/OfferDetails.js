import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';

import './OfferDetails.css'



export default function OfferDetails(props) {

    const [details, setDetails] = useState();
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




    return (
        <>
            { details && (
                <div className="details-container">
                    <h1 className="details-title">Details</h1>
                    <div className="details-wrapper" >
                        {/* This is just a test */}
                        <form className="edit-form" action="submit">
                            <div class="field-input">
                                <h4>Title</h4>
                                <input type="text" defaultValue={details.title} class="form-control" placeholder="You need to add title" required />
                            </div>

                            <div class="field-input">
                                <h4>Brand</h4>
                                <input type="text" defaultValue={details.brand} class="form-control" placeholder="You need to add brand" required />
                            </div>

                            <div class="field-input">
                                <h4>Model</h4>
                                <input type="text" defaultValue={details.model} class="form-control" placeholder="You need to add model" required />
                            </div>

                            <div class="field-input">
                                <h4>Year</h4>
                                <input type="number" defaultValue={details.year} class="form-control" placeholder="You need to add year" required />
                            </div>

                            <div class="field-input">
                                <h4>Price</h4>
                                <input type="number" defaultValue={details.price} class="form-control" placeholder="You need to add year" required />
                            </div>

                            <div class="field-input">
                                <h4>Description</h4>
                                <textarea class="form-control" defaultValue={details.description} required ></textarea>
                            </div>
                            <button className="submitBtn" type="submit">Edit</button>
                        </form>
                    </div>

                </div>
            )}
        </>
    )
}
