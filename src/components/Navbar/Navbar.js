import React, { Component, useState } from 'react';

import {
    NavbarContainer,
    NavItemContainer,
    NavItem,
    NavButton,
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
                        <NavButton>Home</NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton>Today's Deals</NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton>Categories</NavButton>
                    </NavItem>
                </NavItemContainer>
                <SearchBox onChange={(e) => this.searchInputHandler(e)} value={this.state.input} placeholder="Search..." />
                {toggleClearInput}
                <SearchButton />
            </NavbarContainer>
        );
    };
};