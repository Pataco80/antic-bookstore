import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
//import Image from "gatsby-image"
import SEO from "../components/utils/seo"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>


    <Link to="/about/">A Propos</Link>
    <Link to="/products/">Nos Produits</Link>

    <h3>Nos derniers produits</h3>
    <div>
      {/*data.produits.edges.map(({ node: produits }) => {
        return (
          <div key={produits.id} style={{ margin: '1rem 0', padding: '1rem' }}>
            <Image fixed={produits.FeaturedImage.fixed} alt="image-produit" />
            <h1>{produits.titreDuLivre}</h1>
            <p>{`CHF ${produits.price}`}</p>
            <p>{produits.auteur}</p>
            <p>{produits.publicationDate}</p>
            <p>{produits.description.description}</p>
            <p>{`Publié le ${produits.createdAt}`}</p>
          </div>
        )
      })*/}
    </div>
  </Layout>
)

export default IndexPage

/*
export const pageQuery = graphql`
{
  produits:allContentfulProduits(sort:{fields:updatedAt,order:DESC},limit:3){
    edges{
      node{
        titreDuLivre
        auteur
        price
        publicationDate(formatString:"DD MMMM YYYY")
        description{
          description
        }
        FeaturedImage{
          fixed(width:100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        createdAt(formatString:"DD MMMM YYYY")
      }
    }
  }
}
`
*/
