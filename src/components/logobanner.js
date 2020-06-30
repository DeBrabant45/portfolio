import React from 'react'
import styled from "styled-components"
import Logo from '../images/LogoBannerGray.png'


const LogoSpan = styled.span`
position: absolute;
opacity: 0.8;
background-image: url(${Logo});
background-repeat: no-repeat;
background-position: center;
background-size: contain;    
height: 250px;
width: 100%;

@media (max-width: 1024px) {
    height: 150px;
  }

@media (max-width: 768px) {
    height: 145px;
  }

@media (max-width: 700px) {
    height: 100px;
  } 
`

const LogoBanner = () => (
    <>
        <LogoSpan />
    </>
)


export default LogoBanner