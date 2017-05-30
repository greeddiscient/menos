// src/components/AthletePage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import MentorsMenu from './MentorsMenu';
import mentors from '../data/mentors';

export default class MentorPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const mentor = mentors.filter((mentor) => mentor.id === id)[0];
    if (!mentor) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${mentor.cover})` };
    return (
      <div className="athlete-full">
        <div className="navigateBack">
          <Link to="/">« Back to Mentors</Link>
        </div>
        <MentorsMenu mentors={mentors}/>
        <div className="athlete">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${mentor.image}`}/>
            <h2 className="name">{mentor.name}</h2>
            <h3 className="position">{mentor.position} of {mentor.company}</h3>
          </div>
          <div className="description-label">
            <strong>Background:</strong>
          </div>
          <div className="background">
            {mentor.background}
          </div>
          <div className="story-label">
            <strong>Background:</strong>
          </div>
          <div className="story">
            {mentor.story}
          </div>

        </div>

      </div>
    );
  }
}
// <section className="medals">
//   <p>Winner of <strong>{athlete.medals.length}</strong> medals:</p>
//   <ul>{
//     athlete.medals.map((medal, i) => <Medal key={i} {...medal}/>)
//   }</ul>
// </section>
