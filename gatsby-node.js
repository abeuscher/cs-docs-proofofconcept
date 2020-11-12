const path = require(`path`)
const fse = require("fse")
const axios = require("axios")


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(buildPageQuery).then(result => {

    if (result.errors) {
      throw result.errors
    }

    // Pair Pages with Templates
    const pagesToBeBuilt = [
      {
        data: result.data.allCsDocsArticle.edges,
        template: path.resolve(`src/templates/docs-article.js`)
      }
    ]

    // Build Pages
    pagesToBeBuilt.forEach(page => {
      page.data.forEach(pageData => {
        createPage({
          path: `${pageData.node.url}`,
          component: page.template,
          context: pageData.node,
        })
      })
    })

  

    
  })
}

const buildPageQuery = `query csBuildPageQuery {
  allCsDocsArticle {
    edges {
      node {
        title
        url
        article_content {
          text_section {
            add_to_nav
            nav_label
            headline
            content
          }          
          how_to_guide {
            overview {
              add_to_nav
              nav_label
              headline
              content
            }
            steps {
              add_to_nav
              nav_label
              headline
              content
            }
          }
        }
        metadata {
          page_title
          page_description
          page_thumb {
            url
          }
        }
      }
    }
  }
}`;