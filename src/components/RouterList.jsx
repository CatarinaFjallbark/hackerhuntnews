import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './icons/logo.png';

import {
  showTAGS,
  navigationList,
} from '../reducers/posts';

const Wrapper = styled.div`
  display: flex;
`;
const UlStyle = styled.ul`
`;
const ListItemStyle = styled.li`
  list-style: none;
  margin-bottom: 7px;
`;
const ImgBulletStyle = styled.img`
  height: 0.9em;
  width: auto;
  margin-top: 4px;
`;
const StyledLinkComponent = ({ to, text, tagsProp }) => (

  <Wrapper onClick={() => tagsProp(text)}>
    <ImgBulletStyle src={logo} alt="bulletlogo" />
    <Link
      to={to}
      style={{
        textDecoration: 'none', color: '#000000', fontWeight: '300', fontFamily: 'Verdana', paddingLeft: '10px', fontSize: '1.1em',
      }}
    >
      {text}
    </Link>
  </Wrapper>
);

StyledLinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tagsProp: PropTypes.func.isRequired,
};

const RouterList = ({ tagsProp }) => (
  <div>
    <UlStyle>
      {navigationList.map(item => (
        <ListItemStyle key={item}>
          <StyledLinkComponent to={`/${item}`} text={item} tagsProp={tagsProp} />
        </ListItemStyle>
      ))}
    </UlStyle>
  </div>
);

RouterList.propTypes = {
  tagsProp: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  tagsProp: showing => dispatch(showTAGS(showing)),
});

export default connect(
  null,
  mapDispatchToProps,
)(RouterList);
