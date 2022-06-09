import React, { Component } from 'react';
import "./About.css";
import temp from "./../assets/temp.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img src = {temp}
              className="profile_image"
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Vitalis Ibe</div>
            <div className="brief_description">
              My name is Vitalis Ibe. I am curently pusuring my degree in computer science at the University of Central Oklahoma<br/>Some of my hobbies include movies, games, and sport
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}