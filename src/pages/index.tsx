import { Link } from "gatsby"
import * as homeStyles from "./home.module.css"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className={homeStyles.Home}
    >
      <div className={homeStyles.headerOverlay}>
        <hgroup>
          <h1>Juhana Kuparinen</h1>
          <h4>It student and Webmaster @ Digit ry</h4>
        </hgroup>
      </div>
    </div>
  </Layout>
)

export default IndexPage
