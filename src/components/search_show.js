import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ShowsList from '../containers/shows_list';

export default class SearchShow extends Component{
  render(){
    return(
      <div>
        <SearchBar />
        <ShowsList />
      </div>
    );
  }
}
