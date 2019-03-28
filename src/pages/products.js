import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Image from 'gatsby-image'
import { Container, Row, Col } from 'react-bootstrap'
import BackgroundImage from '../components/background-image'

const ProductsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <BackgroundImage img={data.bcgImg.childImageSharp.fluid} title="Notre Catalogue" styles="bcg-img-section products" />
      <section className="container">
        <h2 className="text-center">Nos Produits</h2>
        {data.products.edges.map(({ node: product }) => {
          return (
            <Row className="product" key={product.id}>
              <Col sm="3" md="4" className="img-product">
                <Image fluid={product.featureImage.fluid} />
              </Col>
              <Col className="info" sm="9" md="8">
                <Row className="ml-0 mr-0">
                  <h3>{product.productName}</h3>
                  <p>{`CHF ${product.price}`}</p>
                </Row>
                <Row className="ml-0 mr-0">
                  <p className="w-100">{product.author}</p>
                  <p>{product.publicationDate}</p>
                  <div>{product.description.description}</div>
                  <p>{product.createdAt}</p>
                </Row>
                <Row className="ml-0 mr-0 flex-column flex-sm-row justify-content-around">
                  <Link className="btn btn-primary" to={`/products/${product.productName}`}>Details</Link>
                  <Link className="btn btn-primary" to={`/products/${product.productName}`}>Details</Link>
                </Row>
              </Col>

            </Row>
          )
        })}
        <Col>
        </Col>
      </section>

      <div>

      </div>
    </Layout>
  )
}

export default ProductsPage


export const pageQuery = graphql`
{
  bcgImg: file(relativePath: {eq: "bcg-img-products.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  products:allContentfulProductsCatalogue {
    edges {
      node {
        id
        featureImage{
          fluid(maxWidth:300){
            ...GatsbyContentfulFluid_tracedSVG
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
