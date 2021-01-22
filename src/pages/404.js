/*

  404 Layout

*/


import React from "react"
import CsSmartLink from "../components/common/helpers/contentstack-smart-link"

import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout>
    <div className="max-width padding-both">
      <CsSmartLink href="/docs/">Docs Site</CsSmartLink>
    </div>
  </Layout>
)


export default IndexPage
