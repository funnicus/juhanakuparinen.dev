/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import Header from "./header"
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
                focus has been on fullstack web development with React, Node.js, TypeScript and GraphQL.
                Currently I'm volunteering at Digit ry as a Webmaster!
              </p>
              <p>
                I can program with Java, JavaScript, TypeScript and Python. I can also use React (CRA, Next, Gatsby), GraphQL, Node in the backend and know
                my way around git
                relatively well.
                I have some projects to showcase my web development skills at my <a href="https://github.com/funnicus"><b>GitHub
                    page</b></a>.
              </p>
              <p>
                I have a trackrecord of working well with other people. I have been a Verso-mediator at my
                old school, and I worked as one of the Materials Engineering tutors at University of
                Turku this year.
              </p>
              <p>
                As for hobbies, I like to motorcycle, play video games, run/workout and make tasty pizzas.
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
