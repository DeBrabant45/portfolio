import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import styled from "styled-components"
import './layout.css'

const PageColorDiv = styled.div`
  background: ${props => props.pageColor || "rebeccapurple"};
`

const Layout = ( props ) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <PageColorDiv pageColor={props.pageColor}>
          <Header siteTitle={data.site.siteMetadata.title} headcolor={props.headcolor}/>
            {props.children}
        </PageColorDiv>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
