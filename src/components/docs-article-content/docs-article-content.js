import React, { Component } from "react"
import JumpNav from "../jump-nav/jump-nav"
import HowToGuide from "../how-to-guide/how-to-guide"
import ArticleTextSection from "../article-text-section/article-text-section"

import "./docs-article-content.scss"

export default class DocsArticleContent extends Component {

    blockMap = {
        "how_to_guide": HowToGuide,
        "text_section": ArticleTextSection
    }

    render() {
        let pageSections = []
        let navSections = []
        // Iterate through modular block content type.
        this.props.data.article_content.forEach((block, counter) => {

            // Iterate through Block Types.
            Object.keys(this.blockMap).forEach((blockType, block_idx) => {

                // Check for a match in Block Types.
                if (block[blockType]) {
                    // Add section to page and pass it props.
                    pageSections.push(React.createElement(this.blockMap[blockType], { key: "block-" + counter, data: block[blockType], pageOrder: counter }, null))
                    // Add Section to Nav
                    navSections.push(block[blockType])
                }
            })
        })
        return (
            <div className="docs-page">
                <div className="max-width">
                    <div className="col-left">
                        <p>Left Nav</p>
                    </div>
                    <div className="col-middle">
                        <article className="docs-article">
                            {pageSections}
                        </article>
                    </div>
                    <div className="col-right">
                        <JumpNav sections={navSections} />
                    </div>
                </div>
            </div>
        )
    }
}