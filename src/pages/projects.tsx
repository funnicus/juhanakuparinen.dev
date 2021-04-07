import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'

import * as projectsStyles from '../styles/projects.module.css'

const Projects: React.FC = () => {
    return(
        <Layout>
            <SEO title="Projects" description="..." />
            <div className={projectsStyles.Projects}>
                <div className={projectsStyles.projects} >
                    <article>
                        <header>
                            <h3><a href="https://github.com/funnicus/helikuparinenhomepage">Heli Kuparinen webpage</a></h3>
                            <p>2020</p>
                        </header>
                        <p>Website for a painter and my mom, Heli Kuparinen. Made with React and Node.js. <a
                            href='https://helikuparinen.fi'>The site can be seen here!</a></p>
                        </article>
                    
                        <article>
                        <header>
                            <h3><a href="https://github.com/funnicus/Karmespeli">Kärmespeli</a></h3>
                            <p>2020</p>
                        </header>
                        <p>A snake game made with pygame (python), which is sligthly above average in complexity. This was a project for a
                            university course "Soveltava projekti".</p>
                        </article>
                    
                        <article>
                        <header>
                            <h3><a href="https://github.com/kumpmati/hackathon-projecthon">hackathon-projecthon</a></h3>
                            <p>2020</p>
                        </header>
                        <p>My team had this as our primary Junction 2020 hackathon project.
                            The project was submitted for Just A.I and aito challenges.
                            It is a voicerecognition app made with Kotlin, android studio and JAICF-framework.
                        </p>
                        </article>
                    
                        <article>
                        <header>
                            <h3><a href="https://github.com/funnicus/VibeApp">Vibe app</a></h3>
                            <p>2020</p>
                        </header>
                        <p>Send some positive vibes to your fellow students. 
                            This was a small project for the Junction 2020 hackathon!
                            I used the project to test TypeScript with React.
                            Deployed <a href="https://vibeapp-junction.herokuapp.com">here!</a>
                        </p>
                        </article>
                    
                        <article>
                        <header>
                            <h3><a href="https://github.com/funnicus/Laivanupotus">Laivanupotus</a></h3>
                            <p>2021</p>
                        </header>
                        <p>A project for the university course "Käyttöliittymät" in University of Turku.
                            Laivanupotus in english means Battleship. The project implements the classic board game
                            as a turn based webapp! This was a team project, so I wasn't the only one woking on this!
                            A live working version of the game can be found <a href="https://funnicus.github.io/Laivanupotus/">here</a>!
                        </p>
                    </article>
                </div>
                <div className={projectsStyles.description}>

                </div>
            </div>
        </Layout>
    )
}

export default Projects