import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = props => {
  console.log(props.data.airports.nodes)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      {props.data.airports.nodes.map(d => (
        <div key={d.id} style={{ color: d.data.color }}>
          <h1>{d.data.title.text}</h1>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query Airports {
    airports: allPrismicAirport {
      nodes {
        data {
          color
          date(formatString: "")
          title {
            text
          }
        }
      }
    }
  }
`
