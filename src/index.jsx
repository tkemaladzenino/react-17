
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Authorization from './Authorization';
import Main from './Main';

function App() {
    const handleLogin = (username, password) => {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('email', username);
        localStorage.setItem('password', password);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Authorization handleLogin={handleLogin} />} />
                <Route path="main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);



