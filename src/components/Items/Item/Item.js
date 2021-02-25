import React, { Component } from 'react';

import { 
    ItemContainer, 
    ItemImage,
    ItemTitle,
    ItemPrice,
} from './Item.css';

export default class Item extends Component {
    render() {
        return this.props.items.map((item, index) => {
            return (
                <ItemContainer key={item.id}>
                    <ItemImage src={item.image} />
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                    {/* <p>{item.description}</p> */}
                </ItemContainer>
            );
        });
    };
};