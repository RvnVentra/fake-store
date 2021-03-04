import React, { Component } from 'react';

import { ItemsContainer } from './Items.css';
import Item from './Item/Item';
import Loader from '../Loader/Loader';

export default class Items extends Component {
    render() {
        const displayItems = this.props.itemsPulled ? 
            <ItemsContainer><Item items={this.props.items} categorySelected={this.props.categorySelected} /></ItemsContainer> : 
            <Loader />;

        return (
            <div>
                {displayItems}
            </div>
        );
    };
};