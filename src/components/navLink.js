import React from "react";
import { Link } from 'gatsby'
import styled from "styled-components"

const UnorderedList = styled.ul`
    margin: auto;

    @media (max-width: 500px) {
        display: ${props => props.show || "flex"};
        background: black;
        position: fixed;
        height: 100%;
        width: 100%;
        opacity: .8;
        flex-direction: column;
        justify-content: flex-start;
        left: 0;
        top: 0;
        z-index: 100;
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
    color: black;
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
        color: white;
      } 
`

const NavList = (props) => (
    <UnorderedList show={props.show}>
        {props.children}
        <ListItem>
            <StyledLink to={'/'} activeStyle={{borderBottom: 'solid 1px black'}} >
                Intro
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledLink to={'/#MyInfo'} activeStyle={{borderBottom: 'solid 1px black'}}>
                My Info
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledLink to={'/#Recent'} activeStyle={{borderBottom: 'solid 1px black'}}>
                Recent Work
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledLink to={'/'} activeStyle={{borderBottom: 'solid 1px black'}}>
                Resume
            </StyledLink>
        </ListItem>
    </UnorderedList>
    )

export default NavList