
// Main.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleExit = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate('/');
    };

    // Check if the user is logged in
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!loggedIn) {
        // Redirect to authorization page if not logged in
        navigate('/');
        return null;
    }

    return (
        <div className="container-fluid layout-body d-flex justify-content-center ">
            <div className="row ">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center flex-column gap-4">
                    <div className="dash pb-4"></div>
                    <button className="btnA" onClick={handleExit}>
                        Logout
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Main;





































