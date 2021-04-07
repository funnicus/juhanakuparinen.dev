import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import * as notFoundStyles from '../styles/404.module.css'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={notFoundStyles.NotFound}>
      <hgroup className={notFoundStyles.notFound}> 
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness🥺</p>
      </hgroup> 
    </div>
  </Layout>
)

export default NotFoundPage
