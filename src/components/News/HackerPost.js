import React from 'react';
import styled from 'styled-components';
import PostComponent from './PostComponent'
import Dropdown from './Dropdown'

const Wrapper = styled.div`
    margin-left: 75px;
    font-family: helvetica;
`
const HeaderStyle = styled.div`
  font-size: 1em;
  font-weight: light;
  font-family: Helvetica;
  margin-top:30px;
  margin-bottom: 20px;
  color: gray;
`
const AboveFlowDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  display-flex;
`
const DrpDownStyle = styled.div`
    display:flex;
    align-items: center;
`

const HackerPost = () => (
    <Wrapper>
        <AboveFlowDiv>
            <HeaderStyle>TODAY</HeaderStyle>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <DrpDownStyle>
                <Dropdown />
            </DrpDownStyle>
        </AboveFlowDiv>
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
    </Wrapper>
);
export default HackerPost;
