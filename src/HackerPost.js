import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 156px;
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
const PostStyleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
`
const VotingDiv = styled.div`
`
const TextDiv = styled.div`
`
const Row1 = styled.div`
    height: 30px;
    background: yellow;
`
const Row2 = styled.div`
    height: 30px;
    background: blue;
`
const Row3 = styled.div`
  height: 30px;
  background: green;
`
const Row1Text = styled.div`
    height: 30px;
    background: pink;
`
const Row2Text = styled.div`
    height: 30px;
    background: white;
`
const Row3Text = styled.div`
  height: 30px;
  background: purple;
`
const AboveFlowDiv = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  display-flex;
`
const DrpDownStyle = styled.div`
    display:flex;
    align-items: center;
`

const PostComponent = () => (
    <PostStyleGrid>
        <VotingDiv>
            <Row1></Row1>
            <Row2></Row2>
            <Row3></Row3>
        </VotingDiv>
        <TextDiv>
            <Row1Text></Row1Text>
            <Row2Text></Row2Text>
            <Row3Text></Row3Text>
        </TextDiv>
    </PostStyleGrid>
);

const DrpList = () => (
    <DropdownButton
        bsStyle="default"
        bsSize="smal"
        title="POPULAR"
        id="dd"
    >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Active Item</MenuItem>
        <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>

);

const HackerPost = () => (
    <Wrapper>
        <AboveFlowDiv>
            <HeaderStyle>TODAY</HeaderStyle>
            <div></div>
            <div></div>
            <div></div>
            <DrpDownStyle>
                <DrpList />
            </DrpDownStyle>
        </AboveFlowDiv>
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
    </Wrapper>
);
export default HackerPost;
