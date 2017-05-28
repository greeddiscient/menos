// src/components/AthletesMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class MentorsMenu extends React.Component {
  render() {
    return (
      <nav className="athletes-menu">
        {this.props.mentors.map(menuMentor => {
          return <Link key={menuMentor.id} to={`/mentors/${menuMentor.id}`} activeClassName="active">
            {menuMentor.name}
          </Link>;
        })}
      </nav>
    );
  }
}
