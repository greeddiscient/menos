
import React from 'react';
import NavBar from'./NavBar';

export default class AboutPage extends React.Component {
  render() {
    return (

      <div className="home">
      <NavBar/>
        <div className="about">

          <h1>This is your about page</h1>
          <p>Abyasa, Ivander and I believe that we need guidance in achieving our dreams and reaching our fullest potential. Guidance from successful and established individuals is instrumental. Menos is a website that facilitates and pairs people  up with mentors to aid them in their journey. </p>
        </div>
        <div className="founders">
          <div className="founder-window">
            <img src={`/img/handry-satriago.jpg`}/>
            <h2 className= "founder-name">Abyasa Kamdani</h2>
            <h3 className= "founder-education">UC Berkeley &#39;18</h3>
            <h4 className= "founder-degree">B.A. Economics</h4>
            <h5 className="founder-message">"We belive that all things"</h5>
          </div>
          <div className="founder-window">
            <img src={`/img/handry-satriago.jpg`}/>
            <h2 className= "founder-name">Shaun Djuhari</h2>
            <h3 className= "founder-education">UC Berkeley &#39;16</h3>
            <h4 className= "founder-degree">B.S. Computer Science</h4>
            <h5 className="founder-message">"We belive that all things"</h5>
          </div>
          <div className="founder-window">
            <img src={`/img/handry-satriago.jpg`}/>
            <h2 className= "founder-name">Ivander Tee</h2>
            <h3 className= "founder-education">UC Berkeley &#39;17</h3>
            <h4 className= "founder-degree">B.S. Chemical Engineering</h4>
            <h5 className="founder-message">"We belive that all things"</h5>
          </div>
        </div>
      </div>
    );
  }
}
