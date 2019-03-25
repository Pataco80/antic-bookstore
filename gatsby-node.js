/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulProductsCatalogue {
        edges {
          node {
            id
            productName
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allContentfulProductsCatalogue.edges.forEach(({ node }) => {
        createPage({
          path: `products/${node.productName}`,
          component: path.resolve(`./src/templates/product-template.js`),
          context: {
            id: node.id,
          },
        })
      })
    })
    .catch(err => console.log(err))
}
