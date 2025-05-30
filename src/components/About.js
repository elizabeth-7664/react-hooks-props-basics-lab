import React from "react";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      
    </div>
  );
}

export default About;
