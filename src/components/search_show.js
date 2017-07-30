import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import ShowsList from '../containers/shows_list';
import AppNavbar from './app-navbar';

export default class SearchShow extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <div className="container">
          <SearchBar/>
          <ShowsList/>
        </div>
      </div>
    );
  }
}
