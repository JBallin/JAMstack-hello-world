import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Sup World!</h1>
    <p>I'm a full-stack JavaScript developer who recently graduated from Galvanize's Web Development program.</p>
    <p>I like to contribute to <a href="https://github.com/JBallin">open source</a> and write technical articles on <a href="https://medium.com/@printsupworld">Medium</a>. <strong>Have a lovely day</strong>!</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Don't click me!!!</Link>
  </Layout>
)

export default IndexPage
