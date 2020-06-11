import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const ImageSize = styled.div`
    max-width: 30px;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "github.png" }) {
          childImageSharp {
            fluid(maxWidth: 30) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => 
        <ImageSize>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageSize> }
  />
)
export default Image
