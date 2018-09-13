import React, { Component } from 'react';
import RouterList from './RouterList';
import styled from 'styled-components';
import logo from "./logo.png"

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 4fr;
    height: 100vh;
`
const LogoDiv = styled.div`
    display:flex;
    flex-grow:0;
    justify-content: center;
    align-items: center;
`
const ImgStyle = styled.img`
    max-width: 48px;
    max-height: 48px;
`
const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const HeadLineStyle = styled.div`
    font-size: 40px;
    font-family: Helvetica
    color: orange;
    padding: 20px;
`

const InputStyle = styled.input`
    width: 80%;
    height: 40px;
    border: 3px solid #555;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-image: url(${logo});
    background-position: 10px 10px; 
    background-size: 18px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    focus-color: black;
`

const MenuDiv = styled.div`
`
const ListDiv = styled.div`
    background: yellow;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <LogoDiv>
          <ImgStyle src={logo} alt="logo"></ImgStyle>
        </LogoDiv>
        <SearchDiv>
          <HeadLineStyle>Hacker Hunt News</HeadLineStyle>
          <InputStyle type="text:focus" placeholder="search news"></InputStyle>
        </SearchDiv>
        <MenuDiv>
          <RouterList />
        </MenuDiv>
        <ListDiv>
        </ListDiv>
      </Wrapper>
    );
  }
}

export default App;
