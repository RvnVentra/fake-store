import React from 'react';

import { SidebarItem } from './Sidebar.css';

export default function Sidebar(props) {
    const itemCategoryIsLoaded = props.itemCategories ? 
        Object.keys(props.itemCategories) : null;
    
    if(itemCategoryIsLoaded) {
        return itemCategoryIsLoaded.map((category, index) => {
            return <SidebarItem key={index}>{category}</SidebarItem>
        });
    }
    else {
        return (
            <div>Loading...</div>
        );
    };
};