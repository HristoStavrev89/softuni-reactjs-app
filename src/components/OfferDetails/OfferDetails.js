import React, { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

import './OfferDetails.css'



export default function OfferDetails(props) {

    // comparison current uid with offer.creator to show delete button and edit content

    const [details, setDetails] = useState();
    const [creator, setCreator] = useState(false);

    const { currentUser } = useAuth();

    const offerId = props.match.params.offerId;

    const history = useHistory();

    useEffect(() => {
        db.collection("cars")
            .doc(offerId)
            .get()
            .then(response => {

                const currentOffer = response.data();
                if (currentUser) {
                    if (currentUser.uid == currentOffer.creator) {
                        setCreator(true)
                    }
                }
                setDetails(currentOffer)
            })
    }, []);



    // console.log(creator);
    console.log(creator);


    const titleRef = useRef();
    const brandRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const imgRef = useRef();



    function submitEditedForm(e) {

        e.preventDefault();

        const title = titleRef.current.value;
        const brand = brandRef.current.value;
        const model = modelRef.current.value;
        const year = yearRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const imgUrl = imgRef.current.value;

        db.collection('cars')
            .doc(offerId)
            .get()
            .then((response) => {

                return db.collection('cars')
                    .doc(offerId)
                    .set({
                        ...response.data(),
                        title,
                        brand,
                        model,
                        year,
                        price,
                        description,
                        imgUrl
                    })
            })
        history.push("/");
    }

    function deleteCurrentOffer (e) {
        e.preventDefault();
        db.collection('cars')
           .doc(offerId)
           .delete();
           
        history.push("/")
            
    }

    return (
        <>
            { details && (
                <div className="details-container">
                    <h1 className="details-title">DETAILS</h1>
                    <div className="details-wrapper" >
                        {/* This is just a test    */}

                        {
                            creator ? (
                                <>
                                    <form className="edit-form" action="submit" onSubmit={submitEditedForm}>
                                        <div class="field-input">
                                            <h4>Title</h4>

                                            <input type="text" defaultValue={details.title} class="form-control" placeholder="You need to add title" required ref={titleRef} />
                                        </div>

                                        <div class="field-input">
                                            <h4>Brand</h4>
                                            <input type="text" defaultValue={details.brand} class="form-control" placeholder="You need to add brand" required ref={brandRef} />
                                        </div>


                                        <div class="field-input">
                                            <h4>Model</h4>
                                            <input type="text" defaultValue={details.model} class="form-control" placeholder="You need to add model" required ref={modelRef} />
                                        </div>

                                        <div class="field-input">
                                            <h4>Year</h4>
                                            <input type="number" defaultValue={details.year} class="form-control" placeholder="You need to add year" required ref={yearRef} />
                                        </div>

                                        <div class="field-input">
                                            <h4>Price</h4>
                                            <input type="number" defaultValue={details.price} class="form-control" placeholder="You need to add year" required ref={priceRef} />
                                        </div>

                                        <div class="field-input">
                                            <h4>Image location</h4>
                                            <input type="text" defaultValue={details.imgUrl} class="form-control" placeholder="You need to add image" required ref={imgRef} />
                                        </div>

                                        <div class="field-input">
                                            <h4>Description</h4>
                                            <textarea class="form-control" defaultValue={details.description} required ref={descriptionRef} ></textarea>
                                        </div>
                                        <button className="submitBtn" type="submit">Edit</button>
                                    </form>
                                    <button className="deleteBtn" onClick={deleteCurrentOffer}>Delete</button>
                                </>
                            ) : (
                                <div className="details">
                                    <div class="field-input">
                                        <h4>Title</h4>
                                        <p>{details.title}</p>
                                    </div>
                                    <div class="field-input">
                                        <h4>Brand</h4>
                                        <p>{details.brand}</p>
                                    </div>
                                    <div class="field-input">
                                        <h4>Model</h4>
                                        <p>{details.model}</p>
                                    </div>
                                    <div class="field-input">
                                        <h4>Year</h4>
                                        <p>{details.year}</p>
                                    </div>
                                    <div class="field-input">
                                        <h4>Price</h4>
                                        <p>{details.price}</p>
                                    </div>
                                    <div class="field-input">
                                        <h4>Description</h4>
                                        <p>{details.description}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )}
        </>
    )
}
