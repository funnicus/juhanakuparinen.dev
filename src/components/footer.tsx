import React from 'react'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../images/omakuva.jpg" // Tell webpack this JS file uses this image

import * as footerStyles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
          <div>
            <article>
              <h3>About me</h3>
              <p>
                Hi, my name is <b>Juhana Kuparinen</b>. I was born and
                raised in Helsinki, Finland but as of now
                I study Information and Communcation Technology at University of Turku.
                I'm interested in all things coding, but recently my
                focus has been on fullstack web development with <b>React</b>, <b>Node.js</b>, <b>TypeScript</b> and <b>GraphQL</b>.
                Currently, I'm volunteering at my university student association, Digit ry, as a Webmaster!
              </p>
              <p>
                I have a trackrecord of working well with other people. I have been a Verso-mediator at my
                old school, and I worked as one of the Materials Engineering tutors at University of
                Turku in the fall of 2020. You may be seeing me tutoring again next fall...
              </p>
              <p>
                On my free time, I like to motorcycle, play video games, run/workout and make tasty pizzas.
                I also listen music alot, mainly electronic and ambient. Some of my favorites are <b>Boards of Canada</b>,
                <b> Urlich Schnauss</b>, <b>Aphex Twin</b> and especially the
                album <b>Moon Safari</b> from <b>Air</b>.
              </p>
              <p>
                
              </p>
            </article>
            <img
              src={pic} 
              alt="Logo" 
            />
          </div>
          <div>
            <article>
              <h3>Me around the web:</h3>
              <ul>
                <li><FontAwesomeIcon icon={faGithub} size="2x" /> <a href="https://github.com/funnicus">GitHub</a></li>
                <li><FontAwesomeIcon icon={faLinkedin} size="2x" /> <a href="https://github.com/funnicus">LinkedIn</a></li>
              </ul>
            </article>
          </div>
            <span>
              Juhana Kuparinen © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
        </footer>
    )
}

export default Footer