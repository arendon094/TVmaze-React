import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTVShow } from '../actions';
import { Link } from 'react-router-dom';

class ShowDetails extends Component{
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchTVShow(id);
  }

  render(){
    const { tvShow } = this.props;

    if(!tvShow || !tvShow._embedded){
      return <div>Loading...</div>
    }

    return(
      <div>
        Details for {tvShow.name} (Starring: {tvShow._embedded.cast[0].person.name}) go here!
      </div>
    );
  }
}

function mapStateToProps({ shows }, ownProps){
  return { tvShow: shows[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchTVShow })(ShowDetails);
