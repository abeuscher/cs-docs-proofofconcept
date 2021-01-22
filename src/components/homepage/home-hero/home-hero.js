import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import CsSmartLink from "../../common/helpers/contentstack-smart-link"

import "./home-hero.scss"

export default function HomeHero() {
  const data = useStaticQuery(graphql`
    query HomeHeroQuery {
      csDocsHome {
        hero {
            headline
            search_placeholder_text
            popular_articles_headline
            popular_articles {
                label
                url
            }
        }
      }
    }
  `)
  return (
    <div className="home-hero">
      <div className="max-width padding-both">
        <h1>{data.csDocsHome.hero.headline}</h1>
        <div className="wrapper-search">
          <input type="text" className="search" placeholder={data.csDocsHome.hero.search_placeholder_text} />
          <span className="icon-search"></span>
        </div>
        <p><strong>{data.csDocsHome.hero.popular_articles_headline}</strong>
          {data.csDocsHome.hero.popular_articles.map((article, idx) => (<CsSmartLink key={"pop-link"+idx} href={article.url}>{article.label}</CsSmartLink>))}
        </p>
      </div>
    </div>
  )
}