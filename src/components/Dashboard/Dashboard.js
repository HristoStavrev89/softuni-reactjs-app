import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import { db } from '../../firebase';
import Offer from '../Offer/Offer';
import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {

    // Only offers added from the current user
    const [offers, setOffers] = useState();

    const { currentUser } = useAuth();

    

    useEffect(() => {
        db.collection("cars")
            .get()
            .then(snapshot => {
                const cars = [];
                snapshot.forEach(doc => {
                    
                    const data = doc.data();

                    const currentUserOffers = currentUser.uid === data.creator;
                    if (currentUserOffers) {
                        cars.push(data);
                    }
                    
                })
                setOffers(cars)
            })
    }, [])


    return (


        <div className="content-wrapper-home" >
            <h1 className="title" >Your offers</h1>

            <div className="my-offers-wrapper">

            {                       
                      offers && offers.map(offer =>
                            <Offer
                                image={offer.imgUrl}
                                title={offer.title}
                                brand={offer.brand}
                                model={offer.model}
                                year={offer.year}
                                price={offer.price}
                                description={offer.description}
                            />
                        )
                    }              
            </div>

        </div>




        // <>
        //     <Card>
        //         <Card.Body>
        //             <h2 className="text-center mb-4" >Profile</h2>
        //             {error && <Alert variant="danger" >{error}</Alert>}
        //             <strong>Email: {currentUser.email}</strong>
        //         </Card.Body>
        //     </Card>
        //     <div className="w-100 text-center mt-2" >
        //         <Button variant="link" onClick={handleLogout}>Log Out</Button>
        //     </div>
        // </>
    )
}
