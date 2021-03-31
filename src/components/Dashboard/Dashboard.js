import React, { useState } from 'react';
import { Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './Dashboard.css'

export default function Dashboard() {

    const [ error, setError ] = useState("");
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


        <div className="content-wrapper-home" >
            <h1>Welcome <span>{currentUser.email}</span></h1>
        </div>




        // <>
        //     <Card>
        //         <Card.Body>
        //             <h2 className="text-center mb-4" >Profile</h2>
        //             {error && <Alert variant="danger" >{error}</Alert>}
        //             <strong>Email: {currentUser.email}</strong>
        //         </Card.Body>
        //     </Card>
        //     <div className="w-100 text-center mt-2" >
        //         <Button variant="link" onClick={handleLogout}>Log Out</Button>
        //     </div>
        // </>
    )
}
