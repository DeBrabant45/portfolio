import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const ImageSize = styled.div`
    max-width: 100px;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "csharp.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
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
