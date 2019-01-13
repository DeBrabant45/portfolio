import React from 'react'
import Contact from './Contact'
import NavList from './nav'
import styled from "styled-components"

import Logo from './Logo'

const ColorContainer = styled.div`
  background: ${props => props.inputColor || "rebeccapurple"};
  
  &.sampleOfClassName {
    background: orange;
  }
  padding-bottom: 1.45rem; 
`

const Navigation = styled.nav`
  margin: 0 auto; 
  max-width: 100%; 
  display: flex; 
  justify-content: space-between;
  flex-direction: row;
`
const StyledLink = styled.button`
  margin-top: auto; 
  margin-bottom: auto; 
  padding: 30px; 
  text-decoration: none;
  background:none;
  border:none; 
`

const Header = (props) => (
  <ColorContainer inputColor={props.headcolor}>
    <Navigation>
      <Logo />
      <NavList />
      <StyledLink>
        <Contact />
      </StyledLink>
    </Navigation>
  </ColorContainer>
)


export default Header