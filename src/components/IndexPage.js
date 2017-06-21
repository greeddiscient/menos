// src/components/IndexPage.js
import React from 'react';
import MentorPreview from './MentorPreview';
import mentors from '../data/mentors';
import NavBar from'./NavBar';
import { Link } from 'react-router';

var splashMentors= mentors.filter(mentor=>
  mentor.id === "handry-satriago" ||
  mentor.id === "noni-purnomo" ||
  mentor.id === "ananda-siregar"
)


export default class IndexPage extends React.Component {

  render() {
    return (

      <div className="home">
        <NavBar/>
        <div className="splash-container">
          <h1>Achieve<br/> Greatness</h1>
        </div>

        <div className="about-splash">
          <img src='/img/about-mentor.png'/>
          <div className= "about-splash-container">
            <h1 className="menos-title">MENtorship to Optimize Society</h1>
            <p className="menos-intro">The pursuit of excellence can be demoralizing. At times, we feel lost - we don&#39;t know what to do or where to go. We need someone to point us in the right direction.<br/><br/>Menos connects you with highly established individuals that will guide you through your journey. Our mentors will give you solid advice based on their years and years of running successful companies.</p>
            <button className="btn-default btn-lg mentor-about-button">View All Mentors</button>
        </div>
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
