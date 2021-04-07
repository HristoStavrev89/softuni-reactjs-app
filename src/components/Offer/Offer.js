import React from 'react'
import './Offer.css'
import { Link } from 'react-router-dom'
import OfferDetails from '../OfferDetails/OfferDetails'
import { Route } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext'




export default function Offer({image, title, brand, model, year, description, price, offerId}) {


    

    return (

        <section className="offer">
            <div className="img-wrapper">
                <img src={image} />
            </div>
            <div className="offer-content">
                <h5 className="offer-title">{title}</h5>
                <h5 className="offer-brand">{brand}</h5>
                <h5 className="offer-model">{model}</h5>
                <p className="offer-year">{year}</p>
                <p className="offer-description">{description}</p>
                <p className="offer-price">{price} Euro</p>
                {/* <button className="offer-btn">More</button> */}
                <Link type="button" to={`/details/${offerId}`}>More</Link>               
            </div>
            
                
            
        </section>

    )
}
