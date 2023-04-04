import React from "react";
import "./index.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Exp = () => {
  return (
    <section id="exp">
      <h5>What Skill I Have</h5>
      <h2>MY Experince</h2>
      <div className="container experince__container">
        <div className="experince__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experince__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>TailWind</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>BootStarp</h4>
                <small className="text-light">basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experince__backend">
          <h3>Backend Devlopment</h3>
          <div className="experince__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>node JS</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>MobgoDB</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
