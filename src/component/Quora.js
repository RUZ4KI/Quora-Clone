import React from 'react';
import '../css/Quora.css';
import Feed from './Feed';
import './Navbar.js';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar';
import Widget from './Widget';

function Quora() {
    return (
        <div className="quora">
            <Navbar/>
            <div className="quora__content">
                 <Sidebar/>
                 <Feed/>
                 <Widget/>
            </div>
        </div>

    )
}

export default Quora
