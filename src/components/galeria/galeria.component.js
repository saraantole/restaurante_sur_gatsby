import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './galeria.style.css'
import { FormattedMessage } from "gatsby-plugin-intl"


const GalleryComponent = () => (

  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={data => {
      return (
        <div className='gallery-container'>
          <h1><FormattedMessage id="GalleryPage.gallery" /></h1>
          <div className='img-container container'>
            {data.source.edges.map(({ node }, i) => (
              <Img fadeIn key={i} fluid={node.childImageSharp.fluid} className='img-gallery'/>
            ))}
          </div>
        </div>
      )
    }}
  />
)
export default GalleryComponent