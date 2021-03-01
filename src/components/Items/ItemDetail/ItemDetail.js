import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetail() {
    let { id, test } = useParams();
    return (
        <div>
            <h1>ID: {id}</h1>
            <p>test: {test}</p>
        </div>
    );
};