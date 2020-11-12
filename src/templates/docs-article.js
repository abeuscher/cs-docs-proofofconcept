/*

  Docs Article Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import DocsArticleContent from "../components/docs-article-content/docs-article-content"

const DocsArticle = ({ pageContext }) => {

  return (
    <Layout>
      <DocsArticleContent data={pageContext} />
    </Layout>
  )
}

export default DocsArticle