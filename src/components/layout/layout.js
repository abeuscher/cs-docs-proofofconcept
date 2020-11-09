import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "./layout.scss"

const Layout = ({ children, className }) => {
  return (
    <>
      <main className={className}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node
}

export default Layout
