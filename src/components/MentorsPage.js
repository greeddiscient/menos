// src/components/IndexPage.js
import React from 'react';
import MentorPreview from './MentorPreview';
import mentors from '../data/mentors';

export default class MentorsPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {mentors.map(mentorData => <MentorPreview key={mentorData.id} {...mentorData} />)}
        </div>
      </div>
    );
  }
}
