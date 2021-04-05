import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Navigation.css'

export default function Navigation() {


    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
                <div class="container"><a class="navbar-brand" href="#page-top" >Auto Nation</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto text-uppercase">

                            {
                                currentUser ? (
                                    // Navigation links for logged users
                                    <>
                                        <li class="nav-item"><Link class="nav-link">Hello: {currentUser.email}</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/addpost">Add Post</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/testpage">Gallery</Link></li>
                                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                                    </>
                                ) : (
                                    // Navigation links for guests
                                    <>
                                        <li class="nav-item"><Link class="nav-link" to="/offers">Offers</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/index">Index</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/signup">Sign Up</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/login">Log In</Link></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
