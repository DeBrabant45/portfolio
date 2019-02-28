import React from 'react'
import styled from "styled-components"
import Logo from '../images/Text01.png'


const LogoSpan = styled.span`
position: absolute;
opacity: 0.8;
background-image: url(${Logo});
background-repeat: no-repeat;
background-position: center;
background-size: contain;    
height: 250px;
width: 100%;


@media (max-width: 700px) {
    background-position: top;
  } 
`

const LogoBanner = () => (
    <>
        <LogoSpan />
    </>
)


export default LogoBanner