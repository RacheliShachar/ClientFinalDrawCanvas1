import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';


const Login = (props) => {
    const { setIsLogin,addPParticipant } = props
    const [name, setName] = useState("");
        const saveParticipant = (name) => {
        setIsLogin(false)
        addPParticipant(name)
        
    }
    return (
        <div className="App d-flex justify-content-center align-items-center mt-5" >
            {
                <Form style={{ width: "30vh" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => { saveParticipant(name) }}  >
                        Save User
                    </Button>
                </Form>

            }
        </div>
    );
}

export default Login;
