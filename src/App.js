import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
export default class App extends Component {
  state = {
    searchInput: '',
  };

  searchInputHandler = (e) => {
    let input = e.target.value;

    this.setState({ searchInput: input });
  };

  clearSearchInputHandler = () => {
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <div>
        <Navbar
          searchInput={this.state.searchInput}
          inputHandler={this.searchInputHandler}
          clearInputHandler={this.clearSearchInputHandler}
        />
        {this.state.searchInput}
        <Items />
        <Footer />
      </div>
    );
  };
};
