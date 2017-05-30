// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import NavBar from'./NavBar';


export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-menos.png"/>
          </Link>
        </header>
        <div>
          <NavBar/>
        </div>

        <div className="app-content">{this.props.children}</div>
        <footer>
            <h1 className= "contact-us">
              Contact us at <u className="email">support@menos.id</u>
            </h1>
        </footer>
      </div>
    );
  }
}
