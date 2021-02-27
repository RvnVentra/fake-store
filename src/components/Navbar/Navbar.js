import React from 'react';

import {
    NavbarContainer,
    NavItemContainer,
    NavItem,
    NavButton,
    SearchBox,
    ClearSearch,
    SearchButton,
} from './Navbar.css';

export default function Navbar(props) {

    const toggleClearInput = props.searchInput.length >= 8 ? 
        <ClearSearch style={{visibility: 'visible'}} onClick={() => props.clearInput()}>&#10005;</ClearSearch> :
        <ClearSearch style={{visibility: 'hidden'}}>&#10005;</ClearSearch>;

    return (
        <NavbarContainer>
            <NavItemContainer>
                <NavItem>
                    <NavButton>Home</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton>Today's Deals</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton>Categories</NavButton>
                </NavItem>
                {/* <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Home</a>
                </li> */}
            </NavItemContainer>
            <SearchBox onChange={props.input} value={props.searchInput} placeholder="Search..." />
            {toggleClearInput}
            <SearchButton />
        </NavbarContainer>
    );
};