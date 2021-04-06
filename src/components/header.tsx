import { Link } from "gatsby"
import React from "react"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header>
    <div>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
