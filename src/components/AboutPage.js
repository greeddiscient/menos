
import React from 'react';
import NavBar from'./NavBar';

export default class AboutPage extends React.Component {
  render() {
    return (

      <div className="home">
      <NavBar/>
      <h1 className="about-header-label">About</h1>
      <div className="about">

        <h1 className="about-believe">We Believe</h1>
        <p className="about-content">At Menos, we believe in the pursuit of excellence and reaching our fullest potential. We want to achieve our goals with integrity.
This would not be possible without role models that we respect in our lives. We need someone to guide us on the long and uncertain road to success. <br/><br/>Mentorship has been an ancient common theme in the symbols of our world. From the innate Father - Son relationship, to the classic Master - Apprentice discipleship, to war heroes such as Alexander the Great - Aristotle, and even to popular culture where Luke Skywalker seeks guidance from Obi Wan and Yoda before he goes on to save the universe, mentorship is everywhere. <br/><br/> Menos is our way of connecting you Indonesians to highly established mentors who will give you the best guidance for your quest. <br/><br/>Become the Strongest Version of Yourself!  </p>
      </div>
      <h1 className="founders-header-label">Meet the Founders</h1>
        <div className="founders">

          <div className="founder-window-ivander">
            <img src={`/img/ivander-tee.jpg`}/>
            <div className= "founder-details">
              <h2 className= "founder-name">Ivander Tee</h2>
              <h3 className= "founder-education">UC Berkeley &#39;17</h3>
              <h4 className= "founder-degree">B.S. Chemical Engineering</h4>
              <p className="founder-message"><i className="fa fa-quote-left founder-left-quote" aria-hidden="true"></i>I am where I am toy of connecting you to the right help.<i className="fa fa-quote-right founder-right-quote" aria-hidden="true"></i></p>
            </div>
          </div>

          <div className="founder-window-abyasa">
            <img src={`/img/abyasa-kamdani.jpg`}/>
            <div className= "founder-details">
              <h2 className= "founder-name">Abyasa Kamdani</h2>
              <h3 className= "founder-education">UC Berkeley &#39;18</h3>
              <h4 className= "founder-degree">B.A. Economics</h4>
              <p className="founder-message"><i className="fa fa-quote-left founder-left-quote" aria-hidden="true"></i>We're all born. That's a given. It's what you do with what you have before you die that makes the difference.<i className="fa fa-quote-right founder-right-quote" aria-hidden="true"></i></p>
            </div>
          </div>
          <div className="founder-window-shaun">
            <img src={`/img/shaun-djuhari.jpg`}/>
            <div className= "founder-details">
              <h2 className= "founder-name">Shaun Djuhari</h2>
              <h3 className= "founder-education">UC Berkeley &#39;16</h3>
              <h4 className= "founder-degree">B.S. Computer Science</h4>
              <p className="founder-message"><i className="fa fa-quote-left founder-left-quote" aria-hidden="true"></i>Here's to the crazy ones. The misfits. The rebels. The ones who see things differently. You can quote them, disagree with them, glorify or villify them. But the only thing you can't do is ignore them. Because the people who are crazy enough to think they can change the world, are the ones who do.<i className="fa fa-quote-right founder-right-quote" aria-hidden="true"></i></p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
