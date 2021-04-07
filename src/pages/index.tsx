import { Link } from "gatsby"
import * as homeStyles from "./home.module.css"
import Tiles from '../components/tiles'
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div className={homeStyles.Home}>
      <div className={homeStyles.headerOverlay}>
        <hgroup style={{ fontSize: "1.4em", padding: "30px", marginTop: "10vh" }}>
          <h1>Juhana Kuparinen</h1>
          <h4>IT student and Webmaster <br/> @ <a href="www.digit.fi">Digit ry</a></h4>
        </hgroup>
        <p style={{ fontSize: "0.9em", padding: "40px" }}>
          I build websites powered by React and Node.js. 
          Recently I have also picked up interest in Rust 🦀 and lower level programming!
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
