import React from 'react'
import styled from "styled-components"
import DesignerImg from '../images/Designer.png'

const ContainerDiv = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
`

const ImgDesigner = styled.img`
    margin: auto;
    max-width: 100%;
    display: block;
`

const Text = styled.h1 `
    display: inline-block;
    text-align: center;
    position: absolute;
    left: 490px;
    z-index: 1000000;
    font-size: 40px;
    color: white;
`

const Designer = () => (
    <ContainerDiv>
        <ImgDesigner src={DesignerImg} atl='DesignerImg' />
    </ContainerDiv>
)


export default Designer