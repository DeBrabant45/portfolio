import React from 'react'
import Contact from './contact'
import NavBar from './navBar'
import styled from "styled-components"

import Logo from './logo'

const ColorContainer = styled.div`
  padding-bottom: 1.45rem;
  background:#7510F7;

  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`

const Navigation = styled.nav`
  margin: 0 auto; 
  max-width: 100%; 
  display: flex; 
  justify-content: space-between;
  flex-direction: row;
`

const Header = (props) => (
  <ColorContainer>
    <Navigation>
      <Logo />
      <NavBar />
      <Contact />
    </Navigation>
  </ColorContainer>
)


export default Header