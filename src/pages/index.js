import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import { Row, Col } from 'react-bootstrap'

import BackgroundImage from '../components/background-image'
import Image from "gatsby-image"
import SEO from "../components/utils/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImage img={data.bcgImg.childImageSharp.fluid} title="Bienvenue sur Antic Book Store" styles="bcg-img-section" />
    <section className="container last-products">

      <h2 className="text-center">Nos derniers produits</h2>
      <Row className="justify-content-sm-center">
        {data.produits.edges.map(({ node: produits }) => {
          return (
            <article className="col-sm-6 col-md-4" key={produits.id}>
              <Row className="img-product justify-content-center">
                <Image className="col-xs-12" fixed={produits.featureImage.fixed} />
              </Row>

              <Row className="content-product">
                <Col className="info">
                  <h3>{produits.productName}</h3>
                  <p>{`CHF ${produits.price}`}</p>
                  <p>{produits.author}</p>
                  <p>{produits.publicationDate}</p>
                  <p>{`Publié le ${produits.createdAt}`}</p>
                  <Link className="btn btn-primary" to={`/products/${produits.productName}`}>Details</Link>
                </Col>
              </Row>
            </article>

          )
        })}
      </Row>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
{
  bcgImg: file(relativePath: {eq: "bcg-img-index.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  produits:allContentfulProductsCatalogue(sort:{fields:updatedAt,order:DESC},limit:3){
    edges{
      node{
        id
        productName
        author
        price
        publicationDate(formatString:"DD MMMM YYYY")
        featureImage{
          fixed(width:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        createdAt(formatString:"DD MMMM YYYY")
      }
    }
  }
}
`


