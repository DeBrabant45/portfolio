import React from 'react'
import styled from "styled-components"
import DesignerImg from '../images/Designer.png'

const ImgDesigner = styled.img`
    margin: auto;
    max-width: 100%;
    display: block;
`

const Designer = () => (
    <div>
        <ImgDesigner src={DesignerImg} atl='Designer Image' />
    </div>
)


export default Designer
