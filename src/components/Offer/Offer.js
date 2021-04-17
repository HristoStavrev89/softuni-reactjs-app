import React from 'react'
import './Offer.css'
import { Link } from 'react-router-dom'




export default function Offer({image, title, brand, model, year, description, price, offerId}) {


    

    return (

        <section className="offer">
            <div className="img-wrapper">
                <img src={image} />
            </div>
            <div className="offer-content">
                <h5 className="offer-title">{title}</h5>
                <p className="offer-brand"><span>Brand:&nbsp; </span> {brand}</p>
                <p className="offer-model"><span>Model: </span>{model}</p>
                <p className="offer-year"><span>Year:&nbsp;&nbsp; &nbsp;&nbsp;</span>{year}</p>
                <p className="offer-price"><span>Price:&nbsp; &nbsp;</span>{price} Euro</p>         
            </div>
            
            <Link className="more-btn" type="button" to={`/details/${offerId}`}>More</Link> 
            
        </section>

    )
}
