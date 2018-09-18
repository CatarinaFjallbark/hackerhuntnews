import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import share from '../icons/share.png';
import thumb from '../icons/thumb.png';

const PostStyleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;
const VotingDiv = styled.div`
`;
const TextDiv = styled.div`
`;
const Row1 = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
`;
const Row2 = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: light;
`;
const Row3 = styled.div`
  height: 30px;
`;
const Row1Text = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
`;
const Row2Text = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
`;
const Row3Text = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: light;
  color: gray;
`;
const LastRowStyle = styled.div`
  display: flex;
`;
const Tag = styled.span`
    border: 1px solid gray;
    padding: 2px;
    color: gray;
`;

const PostComponent = ({
  id, likes, shares, header, content, time, account, tags, increment, incrementSHARES,
}) => (
  <PostStyleGrid>
    <VotingDiv>
      <Row1>
        <img src={thumb} alt="thumb" onClick={() => increment(id)} />
        <span>
&nbsp;
          {' '}
          {likes}
        </span>
      </Row1>
      <Row2>
        <img src={share} alt="shares" onClick={() => incrementSHARES(id)} />
        <span>
&nbsp;
          {' '}
          {shares}
        </span>
      </Row2>
      <Row3 />
    </VotingDiv>
    <TextDiv>
      <Row1Text>{header}</Row1Text>
      <Row2Text>{content}</Row2Text>
      <LastRowStyle>
        <Row3Text>
          {time}
          {' '}
&nbsp; by &nbsp;
          {' '}
          {account}
        </Row3Text>
        <span>&nbsp;&nbsp;&nbsp;</span>
        {tags.map(tag => (
          <div key={tag}>
            <Tag>{tag}</Tag>
            <span>&nbsp;</span>
          </div>
        ))
                }
      </LastRowStyle>
    </TextDiv>
    <br />
  </PostStyleGrid>
);

PostComponent.propTypes = {
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  account: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf.isRequired,
  increment: PropTypes.func.isRequired,
  incrementSHARES: PropTypes.func.isRequired,
};

export default PostComponent;
