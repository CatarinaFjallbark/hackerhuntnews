import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import PostComponent from './PostComponent'
import Dropdown from './Dropdown'

import {
    incrementLIKES,
    incrementSHARES
  } from '../../reducers/posts'

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

const HackerPost = ({postsProp, incrementLIKES, incrementSHARES}) => (
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
        {postsProp.map(post => 
            <PostComponent
            id = {post.id}
            likes = {post.likes}
            shares = {post.shares}
            header = {post.header}
            content = {post.content}
            time = {post.time}
            account = {post.account}
            tags = {post.tags}
            showing = {post.showing}
            increment={incrementLIKES}
            incrementSHARES={incrementSHARES}
            />                
        )
        }
    </Wrapper>
);

const mapStateToProps = ({ posts }) => {
    return {
        postsProp: posts.list_of_posts
    }
}
const mapDispatchToProps = (dispatch) => ({
    incrementLIKES: (id) => dispatch(incrementLIKES(id)),
    incrementSHARES: (id) => dispatch(incrementSHARES(id)),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HackerPost);
