/*

  Homepage Layout

*/


import React from "react"

import Layout from "../../components/layout/layout"
import HomeHero from "../../components/homepage/home-hero/home-hero"
import HomeSectionButtons from "../../components/homepage/home-section-buttons/home-section-buttons"

const IndexPage = () => (
  <Layout className="homepage">
    <HomeHero/>
    <HomeSectionButtons/>
  </Layout>
)


export default IndexPage
