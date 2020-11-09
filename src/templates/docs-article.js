/*

  Docs Article Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import HowToGuide from "../components/how-to-guide/how-to-guide"
import ArticleTextSection from "../components/article-text-section/article-text-section"

const DocsArticle = ({ pageContext }) => {
  return (
    <Layout>
      {pageContext.article_content.map((block, idx) => {
        if (block["how_to_guide"]!==null) {
          return (<HowToGuide key={"block-"+idx} data={block["how_to_guide"]} />)
        }
        else if (block["text_section"]!==null) {
          return (<ArticleTextSection key={"block-"+idx} data={block["text_section"]} />)
        }
        else {
          return null
        }
      })}
    </Layout>
  )
}

export default DocsArticle