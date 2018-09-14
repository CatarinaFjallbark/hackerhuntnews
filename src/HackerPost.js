import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import styled from 'styled-components';
import comment from "./comment.png"
import thumb from "./thumb.png"

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
    display: flex;
    align-items: center;
    font-weight: bold;
`
const Row2 = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: light;
`
const Row3 = styled.div`
  height: 30px;
`
const Row1Text = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
`
const Row2Text = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
`
const Row3Text = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: light;
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

const PostComponent = () => (
    <PostStyleGrid>
        <VotingDiv>
            <Row1>
                <img src={thumb} alt="thumb"></img>
                <span>&nbsp; 5</span>
            </Row1>
            <Row2>
                <img src={comment} alt="comment"></img>
                <span>&nbsp; 3</span>
            </Row2>
            <Row3></Row3>
        </VotingDiv>
        <TextDiv>
            <Row1Text>hiration.com</Row1Text>
            <Row2Text>Professional profile management tool using React</Row2Text>
            <Row3Text>6 hours ago by cattazzz</Row3Text>
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
        <MenuItem eventKey="1">Featured</MenuItem>
        <MenuItem eventKey="2">Newest first</MenuItem>
        <MenuItem eventKey="3">Oldest first</MenuItem>
    </DropdownButton>

);

const HackerPost = () => (
    <Wrapper>
        <AboveFlowDiv>
            <HeaderStyle>TODAY</HeaderStyle>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <DrpDownStyle>
                <DrpList />
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
