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
        <p>DevFund was born from a desire to help the developer community at large, and particularly new developers entering the field. We've been so appreciative of the help we've recieved from more senior members of the community, and as we gain experience in the field, we wanted to create an even easier way to give back. DevFund allows new devs to request help funding learning resources that will help them become awesome devs, and lets folks looking to help people breaking into the industry make a difference. </p>

        <h2>Meet the Team</h2>

        <section>

        <div>
          <p className="name">George Raymond</p>
          <img src={require("../assets/people/george.jpg")} alt="George"/>
          <div className="social">
            <a href="https://www.linkedin.com/in/george-raymond-8725b9152/">
              <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-linkedin-outline_211909.png")} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/georgeraymond92">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-github-outline_211903.png")} alt="GitHub Icon"/>
            </a>
          </div>
          <p>My name is George Raymond and I am a Software Developer and General Tech Enthusiast. As a recent transplant from Los Angeles I am enjoying networking and connecting with new people in Seattle who share my passion for technology. Outside of technology I enjoy exploring new restaurants, cooking, and spending time with my dog and family.</p>
        </div>

        <div>
          <p className="name">Becca Lee</p>
          <img src={require("../assets/people/becca.jpg")} alt="Becca"/>
          <div className="social">
            <a href="https://twitter.com/the_becca_lee">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-twitter-outline_211919.png")} alt="GitHub Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/beccalee123/">
              <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-linkedin-outline_211909.png")} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/beccalee123">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-github-outline_211903.png")} alt="GitHub Icon"/>
            </a>
          </div>
          <p>Becca is a software developer with a background in marketing and customer service, who fell in love with the tech industry while working as the marketing manager for a JavaScript consultancy. She is a voracious learner who loves to translate her knowledge and intuition into thoughtful, user-focused strategies.</p>
          
        </div>

        <div>
          <p className="name">Brent Woodward</p>
          <img src={require("../assets/people/brent-2.jpg")} alt="Brent"/>
          <div className="social">
            <a href="https://www.linkedin.com/in/brenton-woodward/">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-linkedin-outline_211909.png")} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/BrentTech">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-github-outline_211903.png")} alt="GitHub Icon"/>
            </a>
          </div>
          <p>Brent is a Software Developer with a background in hospitality management which has informed his user-focused development process. When not coding, he enjoys spending time with his wife, reading, hiking, enjoying a fine cigar, and playing games of all kinds.</p>


        </div>

        <div>
          <p className="name">Jacob Anderson</p>
          <img src={require("../assets/people/jake.jpeg")} alt="Jacob"/>
          <div className="social">
            <a href="https://www.linkedin.com/in/jacob-merrill-anderson/">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-linkedin-outline_211909.png")} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/1anderson2jacob">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-github-outline_211903.png")} alt="GitHub Icon"/>
            </a>
          </div>
          <p>Jake grew up on legos, little did he know they wouldn't just be the building blocks of the castle he was making but also the building blocks for problem solving skills and lego piece bartering skills. If there's one thing that puts the motion in this man's ocean commotion it's playing card games with friends.</p>
        </div>

        
        <div>
          <p className="name">Jonathan DiQuattro</p>
          <img src={require("../assets/people/jon.jpeg")} alt="Jon"/>
          <div className="social">
            <a href="https://www.linkedin.com/in/jonathandiquattro/">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-linkedin-outline_211909.png")} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/https://github.com/jondiquattro">
                <img className="socialicon" src={require("../assets/social/iconfinder_icon-social-github-outline_211903.png")} alt="GitHub Icon"/>
            </a>
          </div>
          <p>A veteran and proven learner, Jonathan has a BA in Computer Science and is looking to make an impact as a fullstack/backend developer.</p>

        </div>


        </section>
      </main>
    </>
  )
}


export default About;