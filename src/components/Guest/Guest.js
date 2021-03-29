import React from 'react'
import { Container } from 'react-bootstrap'
import './Guest.css'

export default function Guest() {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center imgContainer" style={{ minHeight: "90vh"}}>
                <div className="w-100" style={{ maxWidth: "400px" }} >
                    <h1>This is Guests Page</h1>
                </div>
            </Container>
        </>
    )
}
