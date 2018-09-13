import React from 'react';
import styled from 'styled-components';
import logo from "./logo.png"
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
  margin-top: 3px;
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
          <StyledLinkComponent to="/" text="All" />
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
      </UlStyle>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default RouterList;
