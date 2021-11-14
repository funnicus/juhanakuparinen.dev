import React, { ReactNode } from "react"
import Navbar from '../Navbar'
import Footer from '../Footer'
import styles from "./Layout.module.scss"
 
interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout