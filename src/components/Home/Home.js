import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';

import { MainContainer, SidebarContainer, ClearCategoryButton } from './Home.css';

export default class Home extends Component {
  state = {
    searchInput: '',
    items: null,
    itemCategories: null,
    itemsPulled: false,
    categorySelected: null,
    error: null,
    scrolling: false,
  };

  async componentDidMount() {
      try {
          const response = await fetch('https://fakestoreapi.com/products');
          const json = await response.json();

          let items = [];
          let categories = {};

          for(let i = 0; i < json.length; i++) {
              items.push(json[i]);
          };

          if(items.length > 0) {
            for(let i = 0; i < items.length; i++) {
              if(!categories[items[i].category]) {
                categories[items[i].category] = items[i].category;
              };
            };

            this.setState({ 
              items: [...items],
              itemCategories: {...categories},
              itemsPulled: true,
            });
          };
      }
      catch (e) {
        this.setState({ error: e });
      };

      window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if(window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    }
    else if(window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    };
  };

  addCategorySelectedHandler = (e) => {
    const selected = e.target.id;
    this.setState({ categorySelected: selected });
  };

  clearCategorySelectedHandler = () => {
    this.setState({ categorySelected: null });
  };

  render() {
    const displayClearCategory = this.state.categorySelected ? <ClearCategoryButton onClick={this.clearCategorySelectedHandler}>
        Clear category
      </ClearCategoryButton> : null;

    return (
      <MainContainer>
        <Navbar />
        <SidebarContainer
          style={{
            position: this.state.scrolling ? 'fixed' : 'relative',
            marginTop: this.state.scrolling ? '25.5%' : '25px',
          }}
        >
          {displayClearCategory}
          <Sidebar
            itemCategories={this.state.itemCategories}
            categorySelected={this.state.categorySelected}
            addCategory={this.addCategorySelectedHandler}
            clearCategory={this.clearCategorySelectedHandler}
          />
        </SidebarContainer>
        <Items
          items={this.state.items}
          itemsPulled={this.state.itemsPulled}
          categorySelected={this.state.categorySelected}
        />
        <Footer />
      </MainContainer>
    );
  };
};