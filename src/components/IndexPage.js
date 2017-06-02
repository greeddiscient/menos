// src/components/IndexPage.js
import React from 'react';
import MentorPreview from './MentorPreview';
import mentors from '../data/mentors';
import NavBar from'./NavBar';
import { Link } from 'react-router';

var splashMentors= [mentors[0],mentors[1],mentors[2]]

export default class IndexPage extends React.Component {

  render() {
    return (

      <div className="home">
        <NavBar/>
        <div className="splash-container">
          <h1>Achieve<br/> Greatness</h1>
        </div>

        <div className="about-splash">

        </div>

        <div className="mentor-splash">
          <h1 className="mentors-header-label">
            Mentors
          </h1>
          <div className="mentor-splash-preview">
            {splashMentors.map(mentorData => <MentorPreview key={mentorData.id} {...mentorData} />)}
          </div>
          <Link to ='/mentors'>
            <button className="btn-default btn-lg mentor-splash-button">View All Mentors</button>
          </Link>

        </div>

      </div>
    );
  }
}
