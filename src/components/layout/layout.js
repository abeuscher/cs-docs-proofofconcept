import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "./layout.scss"

import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children, className }) => {
  return (
    <>
      <main className={className}>
        <Header homeToggle={className==="homepage"} />
        {children}
        <Footer/>
        </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node
}

export default Layout
