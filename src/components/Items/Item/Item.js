import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import { 
    ItemContainer, 
    ItemImage,
    ItemTitle,
    ItemPrice,
} from './Item.css';

export default class Item extends Component {
    render() {
        if(this.props.categorySelected) {
            return this.props.items.filter(item => item.category === this.props.categorySelected).map((item, index) => {
                return (
                    <ItemContainer key={item.id}>
                        <ItemImage src={item.image} />
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                        {/* <p>{item.description}</p> */}
                    </ItemContainer>
                );
            });
        }
        else {
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
};