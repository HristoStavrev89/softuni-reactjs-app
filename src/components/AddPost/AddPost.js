import React from 'react'
import { Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import './AddPost.css'

import { db } from '../../firebase';

export default function AddPost() {


    const {  currentUser } = useAuth();

    // console.log("This is the current user: " + currentUser.uid)

    




    return (
        <>
            <Container className="d-flex align-items-center justify-content-center containerImg" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }} >
                    <h1>Add Post page</h1>
                    {/* {currentUser && <strong>Email: {currentUser.email}</strong>} */}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Title</span>
                        <input type="text" class="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Image</span>
                        <input type="text" class="form-control" placeholder="Add Image Location" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    
                    <div class="input-group">
                        <span class="input-group-text">Description</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </Container>



        </>
    )
}
