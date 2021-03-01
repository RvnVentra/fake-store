import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ItemDetail() {
    let { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const test = res.data;
                const filtered = test.filter(item => item.id === parseInt(id));

                setItem(filtered);
            });
    }, []);

    const test = item[0];

    return (
        <div>
            <p>{test.title}</p>
            <p>{test.description}</p>
            <p>{test.price}</p>
        </div>
    );
};