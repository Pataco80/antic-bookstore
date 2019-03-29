import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image'
import { Row, Col, Button } from 'react-bootstrap'
import { FiArrowLeftCircle } from "react-icons/fi";

const ProductTemplate = ({ data }) => {
  const product = data.contentfulProductsCatalogue
  const { productName, featureImage, price, author, publicationDate, createdAt } = product
  const { description } = data.contentfulProductsCatalogue.description
  return (
    <Layout>
      <section className="container">
        <Row className="product">
          <Col sm="3" md="4" className="img-product">
            <Image fluid={featureImage.fluid} />
          </Col>
          <Col className="info" sm="9" md="8">
            <Row className="ml-0 mr-0">
              <h2 className="w-100">{productName}</h2>
              <p><b>Prix de vente : </b>{`CHF ${price}`}</p>
              <p className="w-100"><b>Auteur : </b>{author}</p>
              <p><b>Publié le : </b>{publicationDate}</p>
              <div>{description}</div>
              <p><b>Date de publication : </b>{createdAt}</p>
            </Row>
            <Row className="ml-0 mr-0 flex-column flex-sm-row justify-content-around align-content-around">
              <Button className="btn btn-primary snipcart-add-item" data-item-id={product.id}
                data-item-name={product.productName}
                data-item-price={product.price}
                data-item-url={`https://antic-book-store.netlify.com/products/${product.productName}`}
                data-item-image={product.featureImage.fixed.src}>Ajouter au panier</Button>
            </Row>
          </Col>
        </Row>
        <Row>
          <Link className="btn btn-primary back" to="/products/"><FiArrowLeftCircle /> Retour aux produits</Link>
        </Row>
      </section>
    </Layout>
  )
}

export default ProductTemplate

export const query = graphql`
query ($id: String!) {
  contentfulProductsCatalogue(id: {eq: $id}) {
    id
    featureImage {
      fluid(maxWidth: 300) {
        ...GatsbyContentfulFluid_tracedSVG
      }
      fixed(width: 50) {
        ...GatsbyContentfulFixed_tracedSVG
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
