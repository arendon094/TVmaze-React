import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import images from '../images/index';
// import notAvailable from '../images/not-available.png';

class ShowsList extends Component{
  renderShows(){
    return _.map(this.props.shows, tvShow => {
      const summary = (!tvShow.show.summary) ? 'No details available.' : tvShow.show.summary;
      const image = (!tvShow.show.image) ? images.no_show : tvShow.show.image.medium;

      return(
        <div className="row show-preview" key={tvShow.show.id}>
          <div className="col-md-3">
            <span className="show-image">
              <img src={image}/>
            </span>
          </div>
          <div className="col-md-9">
            <h3>{tvShow.show.name}</h3>
            <div dangerouslySetInnerHTML={{
                __html: summary
            }}/>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        {this.renderShows()}
      </div>
    );
  }
}

function mapStateToProps({ shows }){
  return { shows };
}

export default connect(mapStateToProps)(ShowsList);
