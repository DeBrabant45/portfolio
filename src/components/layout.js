import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
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
        <footer>
            © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
