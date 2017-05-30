// src/components/IndexPage.js
import React from 'react';
import MentorPreview from './MentorPreview';
import mentors from '../data/mentors';
import NavBar from'./NavBar';


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
          <div className="athlete-preview">
            <img src={`img/${mentors[0].image}`}/>
            <h2 className="name">{mentors[0].name}</h2>
            <h3 className="position">{mentors[0].position} of {mentors[0].company}</h3>
          </div>

          <div className="athlete-preview">
            <img src={`img/${mentors[1].image}`}/>
            <h2 className="name">{mentors[1].name}</h2>
            <h3 className="position">{mentors[1].position} of {mentors[1].company}</h3>
          </div>

          <div className="athlete-preview">
            <img src={`img/${mentors[2].image}`}/>
            <h2 className="name">{mentors[2].name}</h2>
            <h3 className="position">{mentors[2].position} of {mentors[2].company}</h3>
          </div>
        </div>


      </div>
    );
  }
}
