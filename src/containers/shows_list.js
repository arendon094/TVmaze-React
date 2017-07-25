import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowsList extends Component{
  render(){
    return(
      <div>
        List of shows goes here!
        {console.log(this.props.shows)}
      </div>
    );
  }
}

function mapStateToProps({ shows }){
  return { shows };
}

export default connect(mapStateToProps)(ShowsList);
