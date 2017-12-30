import React, { Component } from 'react';
import icon from '../../assets/search.svg';

class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search-bar">
        <img src={icon} className="search-icon" alt="search" />
        <input className="search-input" type="text" placeholder="Search for boards and cards" />
      </div>
    )
  }
}

export default SearchBar;