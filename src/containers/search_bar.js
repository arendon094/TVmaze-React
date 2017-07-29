import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTVShows} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch tv shows data
    this.props.fetchTVShows(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div>
        <h2 className="v-center">Welcome to the TV Maze Application</h2>
        <p className="lead">Search for any TV show by name</p>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                value={this.state.term}
                onChange={this.onInputChange}
                className="form-control"/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-warning">Search</button>
              </span>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTVShows
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
