import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import { ItemDetailContainer } from './ItemDetail.css';
import Navbar from '../../Navbar/Navbar';

export default function ItemDetail() {
    let { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const test = res.data;
                const filtered = test.filter(item => item.id === parseInt(id));

                setItem(filtered);
            });
    }, []);

    // const test = item[0];

    const itemIsLoaded = item ? <ItemDetailContainer>
            <p>{item[0].title}</p>
            <p>{item[0].description}</p>
            <p>{item[0].price}</p>
        </ItemDetailContainer> : <h1>Loading</h1>;

    return (
        <div>
            <Navbar />
            {itemIsLoaded}
        </div>
    );
};