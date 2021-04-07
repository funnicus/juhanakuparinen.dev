import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tiles from '../components/tiles'

import * as skillsStyles from '../styles/skills.module.css'

const Skills: React.FC = () => (
        <Layout>
            <SEO title="Skills" description="Software and coding skills of Juhana Kuparinen" />
            <div className={skillsStyles.Skills}>
                <Tiles />
                <div className={skillsStyles.description}>
                    <article>
                        <hgroup>
                            <h1>What are my skills?</h1>
                        </hgroup>
                        <p>
                            I can program with <b>Java</b>, <b>JavaScript</b>, <b>TypeScript</b> and <b>Python</b>. 
                            I can also use <b>React</b> (CRA, Gatsby, Next), 
                            <b> GraphQL</b>, <b>Node.js</b> in the backend and know my way around <b>git</b> relatively well.
                        </p>
                        <p>
                            I am able to code both the frontend and the backend and combine them into an fullstack application.
                            I can also do databases with <b>MongoDB</b> and
                            have some minor experience setting up a web server with <b>Nginx</b> and <b>Ubuntu</b>.
                            My fullstack bread and butter is a React front being served
                            by Node.js backend with TypeScript using <b>Express</b> for RESTful routing
                             or <b>Apollo GraphQL</b> for GraphQL, connected to a MongoDB database with <b>mongoose</b>.
                            I have some projects to showcase my web development skills at my 
                            <a href="https://github.com/funnicus"> GitHub page</a>. My most important projects can also be seen under
                            the projects tab!
                        </p>
                    </article>
                </div>
            </div>
        </Layout>
    )

export default Skills