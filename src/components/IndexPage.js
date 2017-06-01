// src/components/IndexPage.js
import React from 'react';
import MentorPreview from './MentorPreview';
import mentors from '../data/mentors';
import NavBar from'./NavBar';

var splashMentors= [mentors[0],mentors[1],mentors[2]]

export default class IndexPage extends React.Component {

  render() {
    return (

      <div className="home">
        <NavBar/>
        <div className="splash-container">
          <h1>Reaching our fullest potential</h1>
        </div>

        <div className="about-splash">

        </div>

        <div className="mentor-splash">
          {splashMentors.map(mentorData => <MentorPreview key={mentorData.id} {...mentorData} />)}
        </div>

      </div>
    );
  }
}
