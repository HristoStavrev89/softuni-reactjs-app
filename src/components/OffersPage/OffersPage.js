import React from 'react'
import { Container } from 'react-bootstrap';
import Offer from '../Offer/Offer';
import './OffersPage.css'

export default function Offers() {


    

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center offers-container">
            <h1 className="container-title">All offers</h1>
                <div className="offers-wrapper" >
                    
                    {/* Component offer test */}
                    <Offer
                    image="https://upload.wikimedia.org/wikipedia/commons/9/9b/Audi_A4_B9_Limousine_3.0_TDI_quattro.JPG"
                    title="Super offer"
                    brand="Audi"
                    model="A4"
                    year="2016"
                    price="15000"
                    description="Some description"
                    />

                    


                </div>
            </Container>
        </>
    )
}
