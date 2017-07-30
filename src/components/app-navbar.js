import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="navbar-brand">TV Maze App</div>
      </nav>
    );
  }
}
