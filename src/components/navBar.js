import React from 'react';
import styled from 'styled-components'
import NavLink from './navLink'


const ContainerDiv = styled.div`
    display: inherit;

    @media (max-width: 500px) {
        display: block;
  
      } 
`
const HamburgerButton = styled.div`
    cursor: pointer;
    font-size: -webkit-xxx-large;
    margin: 20px;
    font-weight: bold;
    z-index: 90;

    @media (min-width: 500px) {
        display: none;
      } 

`
const HamburgerClose = styled.div`
    cursor: pointer;
    font-size: -webkit-xxx-large;
    font-weight: bold;
    margin: 18px;
    color: white;
    text-align: right;
`

class Navbar extends React.Component {
    constructor() {
      super() 
      this.state = { showMenu: false }
    }
  
    _showMenu = (bool) => {
      this.setState({
        showMenu: bool
      });
    }

    render() {
        const showMenu = this.state.showMenu;
        let navigation;
        if (showMenu) {
            navigation = <NavLink>
                            <HamburgerClose onClick={this._showMenu.bind(null, false)}>&times;</HamburgerClose>
                         </NavLink>
        } else {
            navigation = <NavLink show='none'/>
        }
      return (
        <ContainerDiv>
          <HamburgerButton onClick={this._showMenu.bind(null, true)}>&equiv;</HamburgerButton>
          {navigation}
        </ContainerDiv>
      )
    }
  }

export default Navbar;