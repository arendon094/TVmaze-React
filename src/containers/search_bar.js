import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTVShows } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    // Fetch tv shows data
    this.props.fetchTVShows(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input input-group">
        <input
          placeholder=""
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="form-control">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTVShows }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
