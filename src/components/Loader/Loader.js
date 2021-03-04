import React from 'react';

import './Loader.css';

export default function Loader() {
    return (
        <div id="loader-container">
            <p id="loader-label">
                Loading...
            </p>
            <div id="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};