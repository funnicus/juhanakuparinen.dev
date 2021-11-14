import React from "react"
import SEO from "@/components/SEO"

import styles from '../styles/404.module.scss'

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" /><div className={styles.NotFound}>
      <header className={styles.notFound}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness🥺</p>
      </header>
    </div>
  </>
)

export default NotFoundPage