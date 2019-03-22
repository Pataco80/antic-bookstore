import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
//import Image from "../components/image"
import SEO from "../components/utils/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>


    <Link to="/about/">A Propos</Link>
    <Link to="/catalogue/">Nos Produits</Link>

    <h3>Nos derniers produits</h3>
    <div>

    </div>
  </Layout>
)

export default IndexPage
