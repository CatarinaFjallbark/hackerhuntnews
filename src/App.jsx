import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import HackerPost from './components/News/HackerPost';
import RouterList from './components/RouterList';
import logo from './components/icons/logo.png';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 4fr;
    height: 100vh;
`;
const LogoDiv = styled.div`
    display:flex;
    flex-grow:0;
    justify-content: center;
    align-items: center;
`;
const LogoStyle = styled.div`
    color: orange;
    font-size: 4em;
    font-weight:bold;
    font-family: Helvetica;
    text-decoration: underline;
`;
const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HeadLineStyle = styled.div`
    font-size: 40px;
    font-family: Helvetica;
    color: orange;
    padding: 25px;
`;

const InputStyle = styled.input`
    width: 87%;
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
`;

const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
const ListDiv = styled.div`
`;
const HeaderStyle = styled.div`
  font-size: 1em;
  font-weight: light;
  font-family: Helvetica;
  margin-top:30px;
  margin-bottom: 20px;
  color: gray;
  margin-left: 40px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Wrapper>
        <LogoDiv>
          <LogoStyle>HH</LogoStyle>
        </LogoDiv>
        <SearchDiv>
          <HeadLineStyle>Hacker Hunt News</HeadLineStyle>
          <InputStyle type="text:focus" placeholder="search news" value={inputValue} onChange={event => this.setState({ inputValue: event.target.value })} />
        </SearchDiv>
        <MenuDiv>
          <HeaderStyle>TOPICS</HeaderStyle>
          <div>
            <Router>
              <RouterList />
            </Router>
          </div>
        </MenuDiv>
        <ListDiv>
          <HackerPost search={inputValue} />
        </ListDiv>
      </Wrapper>
    );
  }
}
export default App;
