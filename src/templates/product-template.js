import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image'

const ProductTemplate = ({ data }) => {
  console.log(data)
  const { productName, author, price, publicationDate, createdAt } = data.contentfulProductsCatalogue
  const { description } = data.contentfulProductsCatalogue.description
  return (
    <Layout>
      <h1>Simple produit</h1>
      <Link to="/products/">Retour aux produits</Link>
      <div>
        <Image fluid={data.contentfulProductsCatalogue.featureImage.fluid} />
        <h1>{productName}</h1>
        <p>{price}</p>
        <p>{author}</p>
        <p>{publicationDate}</p>
        <div>{description}</div>
        <p>{createdAt}</p>

      </div>
    </Layout>
  )
}

export default ProductTemplate


export const query = graphql`
query ($id: String!) {
  contentfulProductsCatalogue(id: {eq: $id}) {
    id
    featureImage {
      fluid(maxWidth: 100) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    productName
    author
    price
    publicationDate(formatString: "DD MMMM YYYY")
    description {
      description
    }
    createdAt(formatString: "DD MMMM YYYY")
  }
}
`
