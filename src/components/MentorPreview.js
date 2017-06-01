// src/components/AthletePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class MentorPreview extends React.Component {
  render() {
    return (
      <Link to={`/mentors/${this.props.id}`}>
        <div className="athlete-preview">
          <img src={`img/${this.props.image}`}/>
          <div className="mentor-info">
            <h2 className="name">{this.props.name}</h2>
            <h3 className="company">{this.props.company}</h3>
            <h3 className="position">{this.props.position}</h3>

          </div>


        </div>
      </Link>
    );
  }
}
// <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
