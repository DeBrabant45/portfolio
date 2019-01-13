import { Link } from 'gatsby'
import React from 'react'
import Logo from './Logo'
import NavList from './nav'
import styled from "styled-components"

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
const StyledLink = styled(Link)`
  margin-top: auto; 
  margin-bottom: auto; 
  padding: 30px; 
  text-decoration: none; 
`

const ContactDiv = styled.div`
  color: black; 
  letter-spacing: .1em;
  font-size: 14px; 
  font-varian-caps: small-caps; 
  font-weight: bolder;

  &:hover {
    color: gray;
  }

  @media (max-width: 700px) {
    display: none;
  } 
`

const Header = (props) => (
  <ColorContainer inputColor={props.headcolor}>
    <Navigation>
      <Logo />
      <NavList />
      <StyledLink 
        to='/' 
      >
        <ContactDiv>
          Contact
        </ContactDiv>
      </StyledLink>
    </Navigation>
  </ColorContainer>
)


export default Header