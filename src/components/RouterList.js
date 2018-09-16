import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import logo from "./icons/logo.png"
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  showTAGS,
  navigationList
} from '../reducers/posts'

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
  <Wrapper onClick={() => props.tagsProp(props.text)}>
    <ImgBulletStyle src={logo} alt="bulletlogo"></ImgBulletStyle>
    <Link
      to={props.to}
      style={{ textDecoration: "none", color: "#000000", fontWeight: "300", fontFamily: "Verdana", paddingLeft: "10px", fontSize: "1.1em" }}>
      {props.text}
    </Link>
  </Wrapper>
);

const RouterList = ({ tagsProp }) => (
  <Router>
    <div>
      <UlStyle>
        {navigationList.map((item, index)=> (
          <ListItemStyle key={item + index}>
            <StyledLinkComponent to={"/" + item} text={item} tagsProp = {tagsProp}/>
          </ListItemStyle>
        ))}
      </UlStyle>
    </div>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  tagsProp: (showing) => dispatch(showTAGS(showing)),
})

export default connect(
  null,
  mapDispatchToProps
)(RouterList);
