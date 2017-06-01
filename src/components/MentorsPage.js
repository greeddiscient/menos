// src/components/IndexPage.js
import React from 'react';
import MentorPreview from './MentorPreview';
import mentors from '../data/mentors';
import NavBar from'./NavBar';

export default class MentorsPage extends React.Component {
  render() {
    return (



      <div className="home">
        <NavBar/>
        <div className="mentors-header-label">
          Mentors
        </div>
        <div className="athletes-selector">
          {mentors.map(mentorData => <MentorPreview key={mentorData.id} {...mentorData} />)}
        </div>
      </div>
    );
  }
}
