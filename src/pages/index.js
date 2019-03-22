import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>


    <Link to="/about/">Go to page 2</Link>
    <Link to="/catalogue/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
