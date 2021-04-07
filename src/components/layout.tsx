/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import Header from "./header"
import Navbar from './navbar'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../images/omakuva.jpg" // Tell webpack this JS file uses this image
import * as layoutStyles from "./layout.module.css"
import { SiteTitleQuery } from "../../graphql-types"

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data  = useStaticQuery<SiteTitleQuery>(
    graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return data?.site?.siteMetadata?.title || ""
}

const Layout: React.FC<Props> = ({ children }) => {
  const title = useSiteTitle()

  return (
    <>
      <Header siteTitle={title} />
      <div className={layoutStyles.layout}>
        <Navbar />
        <main>{children}</main>
        <footer className={layoutStyles.footer}>
          <div>
            <article>
              <h3>About me</h3>
              <p>
                Hi, my name is <b>Juhana Kuparinen</b>. I study Information and Communcation Technology at University of Turku,
                but I was born and
                raised in Helsinki.
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
                I also listen music alot, mainly electronic and ambient. My favorites are <b>Boards of Canada</b>, <b>Urlich Schnauss</b> and especially the
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
      </div>
    </>
  )
}

export default Layout
