
import React from 'react';
import NavBar from'./NavBar';

export default class AboutPage extends React.Component {
  render() {
    return (

      <div className="home">
      <NavBar/>
      <h1 className="about-header-label">We Believe</h1>
      <div className="about">

        <h1>This is your about page</h1>
        <p>Abyasa, Ivander and I believe that we need guidance in achieving our dreams and reaching our fullest potential. Guidance from successful and established individuals is instrumental. Menos is a website that facilitates and pairs people  up with mentors to aid them in their journey. </p>
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
              <p className="founder-message"><i className="fa fa-quote-left founder-left-quote" aria-hidden="true"></i>rs came in all shapes and foThere were times in my startup or job search that I really needed advice from someone experienced and I have been fortunate enough to find those people. Menos is our way of connecting you to the right help.<i className="fa fa-quote-right founder-right-quote" aria-hidden="true"></i></p>
            </div>
          </div>
          <div className="founder-window-shaun">
            <img src={`/img/shaun-djuhari.jpg`}/>
            <div className= "founder-details">
              <h2 className= "founder-name">Shaun Djuhari</h2>
              <h3 className= "founder-education">UC Berkeley &#39;16</h3>
              <h4 className= "founder-degree">B.S. Computer Science</h4>
              <p className="founder-message"><i className="fa fa-quote-left founder-left-quote" aria-hidden="true"></i>I am where I am today because of those that mentored me along my journey. The mentors came in all shapes and forms - there were some I least expected guidance from. There were times in my startup or job search that I really needed advice from someone experienced and I have been fortunate enough to find those people. Menos is our way of connecting you to the right help.<i className="fa fa-quote-right founder-right-quote" aria-hidden="true"></i></p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
