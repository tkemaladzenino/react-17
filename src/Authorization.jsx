
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/style.css';

const Authorization = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            window.alert('All fields must be filled in');
        } else {
            handleLogin(username, password);
            navigate('/main');
        }
    };

    return (
        <div className="container mt-5 ">
            <div className="row d-flex justify-content-center align-items-center pt-5">
                <div className="col-md-6 pt-5">
                    <div className="A p-1 pt-3 d-flex justify-content-center flex-column">
                        <h2 style={{
                            textAlign: 'center', color: '#68c7d4'
                        }}>Authorization</h2>
                        <Form className="custom-form" onSubmit={handleLoginFormSubmit}>
                            < Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="username" type="text"
                                    onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="password" type="password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <div className="d-flex justify-content-center pb-5 pt-2">
                                <button type="submit" className="btn"> Login</button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default Authorization;
