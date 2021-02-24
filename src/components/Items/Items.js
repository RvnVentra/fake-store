import React, { Component } from 'react';
import Axios from 'axios';

import { ItemsContainer } from './Items.css';
import Item from './Item/Item';

export default class Items extends Component {
    state = {
        items: null,
        itemsPulled: false,
    };

    componentDidMount() {
        Axios.get('https://fakestoreapi.com/products')
            .then(res => {
                let items = [];

                for(let i = 0; i < Object.keys(res.data).length; i++) {
                    items.push(res.data[i]);
                };

                if(items.length > 0) {
                    this.setState({ 
                        items: items,
                        itemsPulled: true,
                    });
                }
            });
    };

    render() {
        const displayItems = this.state.itemsPulled ? 
            <ItemsContainer><Item items={this.state.items} /></ItemsContainer> : 
            <p>Loading...</p>;

        return (
            <div>
                {displayItems}
            </div>
        );
    };
};