import React from 'react';
import styled from 'styled-components';
import logo from "./logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Wrapper = styled.div`

`
const UlStyle = styled.ul`

`
const ListItemStyle = styled.li`
  font-size: 1em;
  list-style: square inside url(${logo});
`

const RouterList = () => (
  <Router>
    <Wrapper>
      <UlStyle>
        <ListItemStyle>
          <Link to="/">All</Link>
        </ListItemStyle>
        <ListItemStyle>
          <Link to="/about">Development</Link>
        </ListItemStyle>
        <ListItemStyle>
          <Link to="/topics">Systems</Link>
        </ListItemStyle>
        <ListItemStyle>
          <Link to="/tool">Tool</Link>
        </ListItemStyle>
        <ListItemStyle>
          <Link to="/data">Data science</Link>
        </ListItemStyle>
        <ListItemStyle>
          <Link to="/blockchain">Blockchain</Link>
        </ListItemStyle>
      </UlStyle>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Wrapper>
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
