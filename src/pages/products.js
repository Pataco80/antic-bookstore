import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Image from 'gatsby-image'

const ProductsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>

      <h1>Nos Produits</h1>
      <Link to='/'>Home</Link>
      <div>
        {data.products.edges.map(({ node: product }) => {
          return (
            <div key={product.id} style={{ margin: '1rem 0', padding: '1rem' }}>

              <Image fixed={product.featureImage.fixed} />
              <h3>{product.productName}</h3>
              <p>{product.price}</p>
              <p>{product.author}</p>
              <p>{product.publicationDate}</p>
              <div>{product.description.description}</div>
              <p>{product.createdAt}</p>
              <Link to={`/products/${product.productName}`}>Details</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProductsPage


export const pageQuery = graphql`
{
  products:allContentfulProductsCatalogue {
    edges {
      node {
        id
        featureImage{
          fixed(width:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        productName
        price
        author
        publicationDate(formatString:"DD MMMM YYYY")
        description{description}
        createdAt(formatString:"DD MMMM YYYY")
      }
    }
  }
}

`
