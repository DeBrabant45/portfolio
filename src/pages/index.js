import React from 'react'
import { Link } from 'gatsby'

import Banner from '../components/banner'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout pageColor='orange'>
    <Banner />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
