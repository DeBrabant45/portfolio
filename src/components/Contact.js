import React from 'react';
import styled from "styled-components"
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '50%',
    height: '50%'
  }
};

const ContactDiv = styled.div`
  color: black; 
  letter-spacing: .1em;
  font-size: 14px; 
  font-varian-caps: small-caps; 
  font-weight: bolder;

  &:hover {
    color: gray;
  }

  @media (max-width: 700px) {
    display: none;
  } 
`
const ExitButton = styled.button`
  float: right;
  border-radius: 50%;
  background: white;
  color: black;
`
const Greeting = styled.h3`
    color: black;
    display: block;
    margin-top: 100px;
    text-align: center;
` 
const Email = styled.div`
    font-size: xx-large;
    text-align: center;
`
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default class Contact extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <ContactDiv onClick={this.openModal}>Contact</ContactDiv>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <ExitButton onClick={this.closeModal}>&times;</ExitButton>
            <Greeting ref={subtitle => this.subtitle = subtitle}>
                Contact me!
            </Greeting>
            <Email>DeBrabant21@gmail.com</Email>
        </Modal>
      </div>
    );
  }
}
  