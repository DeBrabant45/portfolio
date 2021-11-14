import React from "react";
import { Link } from 'gatsby'
import styled from "styled-components"

const MainDiv = styled.div`
    margin: auto;
    
    @media (max-width: 500px) {
        display: ${props => props.show || "flex"};
        position: fixed;
        height: 100%;
        width: 100%;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: start;
        justify-content: flex-start;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
        background: rgba(64,64,64,.93);
        overflow: scroll;
    }
`

const UnorderedList = styled.ul`
    margin: auto;

    @media (max-width: 500px) {
        list-style-type: none;
        background: rgba(0,0,0,.85);
        margin: 20px;
        border-radius: 5px;
        height: 100%;
        display: inline-block;
        width: 90%;
      } 
`

const ListItem = styled.li`
    list-style-type: none; 
    display: inline; 
    text-align: center; 
    padding: 5px; 
    margin: 0 1vw;

    @media (max-width: 500px) {
        display: block;
        margin: 10px;
      } 
`

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: silver;
    letter-spacing: .1em; 
    font-size: 14px; 
    font-variant-caps: small-caps; 
    font-weight: bolder;
    
    &:hover {
        color: gray;
      }

    &.activee {
        border-bottom: 'solid 1px black';
    }

    @media (max-width: 500px) {
        color: orange;
        padding: 8px;
        background-color: #4a4a4a;
        text-decoration: none;
        font-size: 25px;
        color: #fff;
        display: block;
        transition: .3s;
        border-radius: 5px;
        max-width: 200px;
        margin: auto;
        text-align: center;
        margin-bottom: 20px;
      } 
`

const NavList = (props) => (
    <MainDiv show={props.show}>
    <UnorderedList>
        {props.children}
        <ListItem>
            <StyledLink to={'/'} activeStyle={{borderBottom: 'solid 1px silver'}} >
                Intro
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledLink to={'/#MyInfo'} activeStyle={{borderBottom: 'solid 1px silver'}}>
                My Info
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledLink to={'/#Recent'} activeStyle={{borderBottom: 'solid 1px silver'}}>
                Recent Work
            </StyledLink>
        </ListItem>
    </UnorderedList>
    </MainDiv>
    )

export default NavList