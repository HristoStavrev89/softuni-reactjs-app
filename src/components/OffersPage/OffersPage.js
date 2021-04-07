
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import { db } from '../../firebase';
import Offer from '../Offer/Offer';
import OfferDetails from '../OfferDetails/OfferDetails';
import './OffersPage.css'
import { Link } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext'

export default function Offers() {

    const [offers, setOffers] = useState();

    useEffect(() => {
        db.collection("cars")
            .get()
            .then(snapshot => {
                const cars = [];
                snapshot.forEach(doc => {
                    const data = doc.data();

                    cars.push({ id: doc.id, ...data });
                })
                setOffers(cars)
            })
    }, [])



    return (
        <>
            <Container className="d-flex align-items-center justify-content-center offers-container">
                <h1 className="container-title">All offers</h1>
                <div className="offers-wrapper" >
                    {
                        offers && offers.map(offer =>
                            <>
                                <Offer
                                    image={offer.imgUrl}
                                    title={offer.title}
                                    brand={offer.brand}
                                    model={offer.model}
                                    year={offer.year}
                                    price={offer.price}
                                    description={offer.description}
                                    offerId={offer.id}
                                />                              
                            </>
                        )
                    }
                </div>

            </Container>
        </>
    )
}
