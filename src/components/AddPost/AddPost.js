import React, { useRef, useState } from 'react'
import { Container, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './AddPost.css'

import { db } from '../../firebase';

export default function AddPost() {


    const {  currentUser } = useAuth();

    const history = useHistory();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const titleRef = useRef();
    const brandRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const priceRef = useRef();
    const imgLocationRef = useRef();
    const descriptionRef = useRef();

     function handleSubmit(e) {
        e.preventDefault();
        
        const title = titleRef.current.value;
        const brand = brandRef.current.value;
        const model = modelRef.current.value;
        const year = yearRef.current.value;
        const price = priceRef.current.value;
        const imgUrl = imgLocationRef.current.value;
        const description = descriptionRef.current.value;
       
        try {
            setError("");
            setLoading(true);

            db.collection('cars').add({
                title,
                brand,
                model,
                year,
                price,
                imgUrl,
                description,
                creator: currentUser.uid
            })

            history.push("/");
        } catch {
            setError('Failed to create post.');
        }
        setLoading(false);
    }



    return (
        <>

            <Container className="d-flex align-items-center justify-content-center containerImg">
                <div className="content-wrapper">

                <div className="w-100" style={{ maxWidth: "400px" }} >
                    <h1>Create offer</h1>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Title</span>
                        <input type="text" class="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" required ref={titleRef} />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Brand</span>
                        <input type="text" class="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" required ref={brandRef} />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Model</span>
                        <input type="text" class="form-control" placeholder="Add Model" required ref={modelRef} />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Year</span>
                        <input type="number" class="form-control" placeholder="Add Year"  required ref={yearRef} />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Price €</span>
                        <input type="number" class="form-control" placeholder="Add Price"  required ref={priceRef} />
                    </div>



                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Image</span>
                        <input type="text" class="form-control" placeholder="Add Image Location" aria-label="Username" aria-describedby="basic-addon1" required ref={imgLocationRef} />
                    </div>
                    
                    <div class="input-group">
                        <span class="input-group-text">Description</span>
                        <textarea class="form-control" aria-label="With textarea" required ref={descriptionRef}></textarea>
                    </div>
                    <button disabled={loading} className="submitBtn" type="submit">Add offer</button>
                    </form>
                </div>

                </div>
                
            </Container>
        </>
    )
}
