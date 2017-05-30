import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { Link } from 'react-router';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/' className='navbar-brand'>menos</Link>
        </Navbar.Brand>
      </Navbar.Header>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to= "/mentors">
            <NavItem eventKey={2}>Mentors</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={3}>About</NavItem>
          </LinkContainer>
        </Nav>

      </Navbar>
      </div>
    );
  }
}

//
// <Nav>
//   <LinkContainer to="/">
//     <NavItem eventKey={1}>Home</NavItem>
//   </LinkContainer>
//   <LinkContainer to="/mentors">
//     <NavItem eventKey={2}>Mentors</NavItem>
//   </LinkContainer>
//   <LinkContainer to="/about">
//     <NavItem eventKey={3}>About</NavItem>
//   </LinkContainer>
// </Nav>
