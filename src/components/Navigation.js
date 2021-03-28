import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';


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
            <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom" >
                <div class="container"><a class="navbar-brand" href="#">AutoManiacs</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navbarResponsive"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">



                            {
                                currentUser ? (
                                    <>
                                        <li class="nav-item"><Link class="nav-link">Hello: {currentUser.email}</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/addpost">Add Post</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                                    </>
                                ) : (
                                    <>
                                        <li class="nav-item"><Link class="nav-link" to="/testpage">Gallery</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
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
