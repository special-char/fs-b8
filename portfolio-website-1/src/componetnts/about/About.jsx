import React from "react";
import "./index.css";
import ME from "../../assets/download.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
        <h5>get to know</h5>
        <h2 >about me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="myself" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5> Experience</h5>
                <small>3 Months Of Learnign Experience</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5> Clients</h5>
                <small>3+ Clinets</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5> Projects</h5>
                <small>10+ Projects</small>
              </article>

            </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ipsum cum nobis tempora deleniti? Neque, eaque possimus eum
                magni, laboriosam reprehenderit, fuga sint consectetur corporis
                illo saepe sapiente ipsum molestias!
              </p>

              <a href="#contact" className="btn btn__primary">
                let's talk
              </a>
          </div>
        </div>
    </section>
  );
};

export default About;
