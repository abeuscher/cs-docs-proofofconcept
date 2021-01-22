import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import CsSmartLink from "../../common/helpers/contentstack-smart-link"
import LazyThumb from "../../common/helpers/lazy-thumb"

import "./home-section-buttons.scss"

export default function HomeSectionButtons() {
  const data = useStaticQuery(graphql`
    query HomeSectionButtonsQuery {
      csDocsHome {
        section_buttons {
            icon {
                url
            }
            headline
            content
            url
        }
      }
      allCsDocsArticle {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return (
    <div className="home-section-buttons">
        <div className="max-width">
          {data.allCsDocsArticle.edges.map((article,idx)=>(<p key={idx}><CsSmartLink href={article.node.url}>{article.node.title}</CsSmartLink></p>))}
            <div className="section-buttons">
                {data.csDocsHome.section_buttons.map((button,idx)=>(
                    <CsSmartLink href={button.url} className="section-button" key={"section-button-"+idx}>
                        <div className="inner">
                            {button.icon ? <LazyThumb src={button.icon.url} className="icon" /> : ""}
                            <h3>{button.headline}</h3>
                            <p>{button.content}</p>
                        </div>
                    </CsSmartLink>
                ))}
            </div>
        </div>
    </div>
  )
}