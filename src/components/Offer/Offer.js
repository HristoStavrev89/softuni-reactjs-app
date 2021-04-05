import React from 'react'
import './Offer.css'

export default function Offer({image, title, brand, model, year, description, price}) {
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
                <button className="offer-btn">More</button>
            </div>
        </section>

    )
}
