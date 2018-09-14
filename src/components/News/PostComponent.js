import React from 'react';
import styled from 'styled-components';
import comment from "../icons/comment.png"
import thumb from "../icons/thumb.png"

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

export default PostComponent;
