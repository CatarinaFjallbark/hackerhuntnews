import React from 'react';
import styled from 'styled-components';
import share from "../icons/share.png"
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
const LastRowStyle = styled.div`
  display: flex;
`
const Tag = styled.span`
    border: 1px solid gray;
    padding: 2px;
    color: gray;
    flex-end;
`

const PostComponent = ({ id, likes, shares, header, content, time, account, tags, increment, incrementSHARES}) => (
    <PostStyleGrid>
        <VotingDiv>
            <Row1>
                <img src={thumb} alt="thumb" onClick={() => increment(id)}></img>
                <span>&nbsp; {likes}</span>
            </Row1>
            <Row2>
                <img src={share} alt="shares" onClick={() => incrementSHARES(id)}></img>
                <span>&nbsp; {shares}</span>
            </Row2>
            <Row3></Row3>
        </VotingDiv>
        <TextDiv>
            <Row1Text>{header}</Row1Text>
            <Row2Text>{content}</Row2Text>
            <LastRowStyle>
                <Row3Text>{time} &nbsp; by &nbsp; {account}</Row3Text>
                <span>&nbsp;&nbsp;&nbsp;</span>
                {tags.map((tag, index) =>
                    <div key={tag + index}>
                        <Tag>{tag}</Tag>
                        <span>&nbsp;</span>
                    </div>
                )
                }
            </LastRowStyle>
        </TextDiv>
        <br />
    </PostStyleGrid>
);

export default PostComponent;
