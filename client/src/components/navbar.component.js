import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg container-par">
        <Link to="/" className="navbar-brand brand">
          Employee Management Admin System
        </Link>
        <div className="collpase navbar-collapse right-display">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item right-display">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
