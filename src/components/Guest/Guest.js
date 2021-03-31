import React from 'react'
import { Container } from 'react-bootstrap'
import './Guest.css'

export default function Guest() {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center imgContainer" style={{ minHeight: "90vh"}}>
                <div className="w-100 wrapper" >
                    <h1 className="greet" >Welcome to <span>AutoManiacs</span></h1>
                    <p>- да добавя кратко въведение в сайта</p>
                    <p>- да се показват обявите?</p>
                </div>
            </Container>
        </>
    )
}
