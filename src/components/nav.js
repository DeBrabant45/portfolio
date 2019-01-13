import React from "react";
import { Link } from 'gatsby'
import Media from 'react-media';
import { slide as Menu } from 'react-burger-menu'
import styled from "styled-components"

const UnorderedList = styled.ul`
    margin: auto;
`

const ListItem = styled.li`
    list-style-type: none; 
    display: inline; 
    text-align: center; 
    padding: 5px; 
    margin: 0 1vw;

    @media (max-width: 500px) {
        display: block;
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
`

class NavList extends React.Component {
    constructor () {
      super()
      this.state = {
        device1: 'mobile',
        device2: 'desktop',
        isOpen: 'false'
      }
    }

  render() {
      return (
        <UnorderedList>
            <Media
                query="(max-width: 500px)"
                defaultMatches={this.state.device1 === 'mobile'}
                render={() =>
                    <div>
                    <Menu      
                        isOpen={ false }
                    >
                        <ListItem>
                            <StyledLink 
                                to={'/'} 
                                activeStyle={{
                                    borderBottom: 'solid 1px white',
                                }}
                            >
                                name
                            </StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink 
                                to={'/'} 
                                activeStyle={{
                                    borderBottom: 'solid 1px white',
                                }}
                            >
                                name
                            </StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink 
                                to={'/'} 
                                activeStyle={{
                                    borderBottom: 'solid 1px white',
                                }}
                            >
                                name
                            </StyledLink>
                        </ListItem>
                    </Menu>
                    </div>
                }
            />
            <Media
                query="(min-width: 501px)"
                defaultMatches={this.state.device2 === 'desktop'}
                render={() =>
                    <div>
                    <ListItem>
                        <StyledLink 
                            to={'/'} 
                            activeStyle={{
                                borderBottom: 'solid 1px black',
                            }}
                        >
                            Intro
                        </StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink 
                            to={'/what/'} 
                            activeStyle={{
                                borderBottom: 'solid 1px black',
                            }}
                        >
                            Who
                        </StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink 
                            to={'/who/'} 
                            activeStyle={{
                                borderBottom: 'solid 1px black',
                            }}
                        >
                            What    
                        </StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink 
                            to={'/work/'} 
                            activeStyle={{
                                borderBottom: 'solid 1px black',
                            }}
                        >
                            Work    
                        </StyledLink>
                    </ListItem>
                </div>
                }
            />
        </UnorderedList>
      );
    }
}

export default NavList