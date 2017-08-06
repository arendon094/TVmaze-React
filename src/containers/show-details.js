import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTVShow} from '../actions';
import images from '../images/index';
import {Link} from 'react-router-dom';

class ShowDetails extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchTVShow(id);
  }

  displayGenres(genres) {
    if (!genres) {
      return (
        <span>No genres available</span>
      );
    } else {
      var genresList = genres.map((genre, index) => {
        if (index === 0) {
          return (
            <span key={index}>
              {genre}
            </span>
          )
        } else {
          return (
            <span key={index}>
              |{genre}
            </span>
          )
        }
      });

      return genresList;
    }

    return(
      <span>It didn't work</span>
    );
  }

  displayImage(image){
    const showImage = (!image) ? images.no_show : image.medium;
    return(<img src={showImage}/>);
  }

  displayCast(cast){

    return cast.map(actor => {
      const characterImage = (!actor.character.image) ? images.no_actor : actor.character.image.medium;
      const personImage = (!actor.person.image) ? images.no_actor : actor.person.image.medium;

      return(
        <div className="row" key={actor.character.id}>
          <div className="col-md-3">
            <div>
              <img src={characterImage} className="character-image"></img>
            </div>
          </div>
          <div className="col-md-6">
            {actor.character.name} as portrayed by {actor.person.name}
          </div>
          <div className="col-md-3">
            <div>
              <img src={personImage} className="character-image"></img>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const {tvShow} = this.props;

    if (!tvShow || !tvShow._embedded) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{tvShow.name}</h1>
          </div>
          <div className="col-md-6">
            <div className="display-right">
              <Link to="/" className="btn btn-warning">Back To Search</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="details-image">
              {this.displayImage(tvShow.image)}
            </div>
          </div>
          <div className="col-md-9">
            <h3>Show Summary</h3> {this.displayGenres(tvShow.genres)}<hr></hr>
              <div dangerouslySetInnerHTML={{
                __html: tvShow.summary
              }}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>Cast</h3><hr></hr>
          </div>
        </div>
        {this.displayCast(tvShow._embedded.cast)}
      </div>
    );
  }
}

function mapStateToProps({
  shows
}, ownProps) {
  return {
    tvShow: shows[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchTVShow})(ShowDetails);
