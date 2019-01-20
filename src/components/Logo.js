import { Link } from 'gatsby'
import React from 'react'
import LogoImg from '../images/logo.png'
import styled from "styled-components"

const MainLogo = styled.img`
  max-width: 100px; 
  margin-bottom: 0; 
`

const Logo = () => (
    <Link 
        to="/">
          <MainLogo 
            src={LogoImg} 
            alt="Logo" 
          />
    </Link>
)


export default Logo