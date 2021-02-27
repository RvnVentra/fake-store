import React from 'react';

import { SidebarItem, Item } from './Sidebar.css';

export default function Sidebar(props) {
    const itemCategoryIsLoaded = props.itemCategories ? 
        Object.keys(props.itemCategories) : null;
    
    if(itemCategoryIsLoaded) {
        return itemCategoryIsLoaded.map((category, index) => {
            return <SidebarItem key={index}>
                <Item>{category}</Item>
            </SidebarItem>
        });
    }
    else {
        return (
            <div>Loading...</div>
        );
    };
};