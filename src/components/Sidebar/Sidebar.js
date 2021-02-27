import React from 'react';

import { SidebarItem, Item } from './Sidebar.css';

export default function Sidebar(props) {
    const itemCategoryIsLoaded = props.itemCategories ? 
        Object.keys(props.itemCategories) : null;
    
    const categorySelectedCSS = props.categorySelected ? {
        background: 'gray',
        color: 'white',
    } : null;

    if(itemCategoryIsLoaded) {
        return itemCategoryIsLoaded.map((category, index) => {
            if(props.categorySelected === category) {
                return <SidebarItem key={index}>
                    <Item
                        id={category}
                        onClick={(e) => props.addCategory(e)}
                        style={categorySelectedCSS}
                    >
                        {category}
                    </Item>
                </SidebarItem>
            }
            else {
                return <SidebarItem key={index}>
                    <Item
                        id={category}
                        onClick={(e) => props.addCategory(e)}
                        onclick
                    >
                        {category}
                    </Item>
                </SidebarItem>
            };
        });
    }
    else {
        return (
            <div>Loading...</div>
        );
    };
};