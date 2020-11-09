const fs = require("fs")
const path = require('path')
//The devops team's deployment script will set the Environment'
const activeEnv = "dev";
console.log("ENV:",activeEnv)
let envConfig;

if (fs.existsSync(path.join(__dirname, 'config', activeEnv + '.js'))) {
  envConfig = require(path.join(__dirname, 'config', activeEnv + '.js'));
} else {
  envConfig = require(path.join(__dirname, 'config', 'development'));
}

console.log("Beginning Build in " + activeEnv + " environment...", envConfig.apiKey,envConfig.baseUrl,envConfig.deliveryToken)

module.exports = {
  siteMetadata: {
    title: `ContentStack Docs`,
    description: `contentstack.com docs`,
    author: `Contentstack`,
    siteUrl: envConfig.baseUrl
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-contentstack",
      options: {
        'api_key': envConfig.apiKey,
        'delivery_token': envConfig.deliveryToken,
        'environment': activeEnv,
        'expediteBuild': false,
        'type_prefix': `cs`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve:`gatsby-plugin-sitemap`,
      options: {
        output:`sitemap-main.xml`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`]
          },
          {
            family: `Inter`
          },
        ],
      },
    },
  ],
}