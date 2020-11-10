/*

  Docs Article Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import HowToGuide from "../components/how-to-guide/how-to-guide"
import ArticleTextSection from "../components/article-text-section/article-text-section"

const blockMap = {
  "how_to_guide": HowToGuide,
  "text_section": ArticleTextSection
}
let pageSections = []
const DocsArticle = ({ pageContext }) => { 

  //Ieerate through modular block content type.
  pageContext.article_content.forEach((block, counter) => {

    //Iterate through Block Types.
    Object.keys(blockMap).forEach((blockType) => {

      // Check for a match in Block Types. If present, add section to page after passing it the block props.
      if (block[blockType]) {
        pageSections.push(React.createElement(blockMap[blockType],{ key: "block-" + counter, data: block[blockType] },null))
      }
    })
  })
  return (
    <Layout>
      {pageSections}
    </Layout>
  )
}

export default DocsArticle