import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import { 
    ItemContainer,
    ItemImage,
    ItemTitle,
    ItemDescription,
    ItemPrice,
} from './ItemDetail.css';
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

    const itemIsLoaded = item ? <ItemContainer>
            <ItemImage src={item[0].image} />
            <ItemTitle>{item[0].title}</ItemTitle>
            <ItemPrice>{item[0].price}</ItemPrice>
            <ItemDescription>{item[0].description}</ItemDescription>
        </ItemContainer> : <h1>Loading</h1>;

    return (
        <div>
            <Navbar />
            {itemIsLoaded}
        </div>
    );
};