import React from 'react';

import "../styles/reset.scss";
import "../styles/base.scss";
import "../styles/about.scss";

const About = () => {
  return(
    <>
      <main id="aboutPage">
        <section className="hero" id="about">
          <h1>About DevFund</h1>
          <h3>The story behind the site</h3>
        </section>

        <h2> Mission </h2>
        <p>DevFund was borne from a desire to help the developer community at large, and particularly new developers entering the field. We've been so appreciative of the help we've recieved from more senior members of the community, and as we gain experience in the field, we wanted to create an even easier way to give back. DevFund allows new devs to request help funding learning resources that will help them become awesome devs, and lets folks looking to help people breaking into the industry make a difference. </p>

        <h2>Meet the Team</h2>

        <div>
          <p>George Raymond</p>
          <img src={require("../assets/people/george.jpeg")} alt="George" width="250" height="250"/>
          <p>Bio goes here</p>
          <p><a href="https://www.linkedin.com/in/george-raymond-8725b9152/">LinkeIn: in/george-raymond-8725b9152/</a></p>
          <p><a href="https://github.com/georgeraymond92">GitHub: github.com/georgeraymond92</a></p>
        </div>

        <div>
          <p>Becca Lee</p>
          <img src={require("../assets/people/becca.jpg")} alt="Becca" width="250" height="250"/>
          <p>Becca is a software developer with a background in marketing and customer service, who fell in love with the tech industry while working as the marketing manager for a JavaScript consultancy. She is a voracious learner who loves to translate her knowledge and intuition into thoughtful, user-focused strategies. Becca recently graduated from the JavaScript program at Code Fellows and is excited to use her new skills to create user-centric apps and solve challenging software problems.</p>
          <p><a href="https://twitter.com/the_becca_lee">Twitter: https://twitter.com/the_becca_lee</a></p>
          <p><a href="https://www.linkedin.com/in/beccalee123/">LinkeIn: in/beccalee123/ </a></p>
          <p><a href="https://github.com/beccalee123">GitHub: github.com/beccalee123</a></p>
        </div>

        <div>
          <p>Jonathan DiQuattro</p>
          <img src={require("../assets/people/jon.jpeg")} alt="Jon" width="250" height="250"/>

          <p>A veteran and proven learner, Jonathan has a BA in Computer Science and is looking to make an impact as a fullstack/backend developer.</p>
          <p><a href="https://www.linkedin.com/in/jonathandiquattro/">Linkedin: /in/jonathandiquattro</a></p>
          <p><a href="https://github.com/jondiquattro">GitHub: github.com/jondiquattro</a></p>
        </div>

        <div>
          <p>Brent Woodward</p>
          <img src={require("../assets/people/brent-2.jpg")} alt="B-rent" width="250" height="250"/>
          <p>Bio goes here</p>
          <p><a href="https://www.linkedin.com/in/brenton-woodward/">LinkeIn: /in/brenton-woodward/</a></p>
          <p><a href="https://github.com/BrentTech">GitHub: github.com/BrentTech </a></p>
        </div>

        <div>
          <p>Jacob Anderson</p>
          <img src={require("../assets/people/jake.jpeg")} alt="Yacob" width="250" height="250"/>
          <p>Jake grew up on legos, little did he know they wouldn't just be the building blocks of the castle he was making but also the building blocks for problem solving skills and lego piece bartering skills. If there's one thing that puts the motion in this man's ocean commotion it's playing card games with friends.</p>
          <p><a href="https://www.linkedin.com/in/jacob-merrill-anderson/">LinkeIn: /in/jacob-merrill-anderson/ </a></p>
          <p><a href="https://github.com/1anderson2jacob">GitHub: github.com/1anderson2jacob </a></p>
        </div>
      </main>
    </>
  )
}


export default About;