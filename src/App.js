import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
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
      </div>
    );
  };
};
