import React, { Component } from 'react';

import { ItemsContainer } from './Items.css';
import Item from './Item/Item';

export default class Items extends Component {
    render() {
        const displayItems = this.props.itemsPulled ? 
            <ItemsContainer><Item items={this.props.items} categorySelected={this.props.categorySelected} /></ItemsContainer> : 
            <p>Loading...</p>;

        return (
            <div>
                {displayItems}
            </div>
        );
    };
};