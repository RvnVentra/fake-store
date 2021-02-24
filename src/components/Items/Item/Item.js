import React, { Component } from 'react';

import { ItemContainer, ItemImage } from './Item.css';

export default class Item extends Component {
    render() {
        return this.props.items.map((item, index) => {
            return (
                <ItemContainer key={item.id}>
                    <ItemImage src={item.image} />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </ItemContainer>
            );
        });
    };
};