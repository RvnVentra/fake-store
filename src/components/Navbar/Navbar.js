import React, { Component, useState } from 'react';

import {
    NavbarContainer,
    NavItemContainer,
    NavItem,
    NavLink,
    SearchBox,
    ClearSearch,
    SearchButton,
} from './Navbar.css';

export default class Navbar extends Component {
    state = {
        input: '',
    };

    searchInputHandler = (e) => {
        let _input = e.target.value;
        this.setState({ input: _input });
    };
    
    clearSearchInputHandler = () => {
        this.setState({ input: '' });
    };

    render() {
        const toggleClearInput = this.state.input.length >= 8 ? 
        <ClearSearch style={{visibility: 'visible'}} onClick={this.clearSearchInputHandler}>&#10005;</ClearSearch> :
        <ClearSearch style={{visibility: 'hidden'}}>&#10005;</ClearSearch>;

        return (
            <NavbarContainer>
                <NavItemContainer>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Today's Deals</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Categories</NavLink>
                    </NavItem>
                </NavItemContainer>
                <SearchBox onChange={(e) => this.searchInputHandler(e)} value={this.state.input} placeholder="Search..." />
                {toggleClearInput}
                <SearchButton />
            </NavbarContainer>
        );
    };
};