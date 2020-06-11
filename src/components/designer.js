import React from 'react'
import styled from "styled-components"
import DesignerImg from '../images/Designer.png'

const DesignerContainer = styled.div`
    background:#7510F7;
    padding: 15px;
`
const ImgDesigner = styled.img`
    margin: auto;
    max-width: 100%;
    display: block;
`

const Designer = () => (
    <DesignerContainer>
        <ImgDesigner src={DesignerImg} atl='Designer Image' />
    </DesignerContainer>
)


export default Designer