import React from 'react'
import { Container } from 'react-bootstrap'
import './Guest.css'

export default function Guest() {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center imgContainer-guest">
                <div className="w-100 wrapper" >
                    <h1 className="greet" >Welcome to <span>Auto Nation</span></h1>
                    <p>Find your dream car now.</p>
                    
                </div>
            </Container>
        </>
    )
}
