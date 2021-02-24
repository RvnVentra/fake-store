import React, { Component } from 'react';

import { ItemContainer } from './Item.css';

export default class Item extends Component {
    render() {
        return this.props.items.map((item, index) => {
            return (
                <ItemContainer key={item.id}>
                    <p key={item.id}>{item.title}</p>
                </ItemContainer>
            );
        });
    };
};