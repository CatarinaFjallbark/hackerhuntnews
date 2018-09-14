import React from 'react';
import styled from 'styled-components';
import logo from "../icons/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
`
const UlStyle = styled.ul`
`
const ListItemStyle = styled.li`
  list-style: none;
  margin-bottom: 7px;
`
const ImgBulletStyle = styled.img`
  height: 0.9em;
  width: auto;
  margin-top: 4px;
`


const StyledLinkComponent = (props) => (
  <Wrapper>
    <ImgBulletStyle src={logo} alt="bulletlogo"></ImgBulletStyle>
    <Link
      to={props.to}
      style={{ textDecoration: "none", color: "#000000", fontWeight: "300", fontFamily: "Verdana", paddingLeft: "10px", fontSize: "1.1em"}}>
      {props.text}
    </Link>
  </Wrapper>
);

const RouterList = () => (
  <Router>
    <div>
      <UlStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/" text="Home" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/about" text="About" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/topics" text="Systems" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/tool" text="Tool" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/data" text="Data science" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/blockchain" text="Blockchain" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/mobile" text="Mobile" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/awesome-list" text="Awesome List" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/social" text="Social" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/visual" text="Visual" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/open-source" text="Open source" />
        </ListItemStyle>
        <ListItemStyle>
          <StyledLinkComponent to="/all-topics" text="All topics" />
        </ListItemStyle>
      </UlStyle>

      <Route exact path="/"/>
      <Route path="/about"/>
      <Route path="/topics"/>
    </div>
  </Router>
);

export default RouterList;
