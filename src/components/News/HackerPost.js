import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import PostComponent from './PostComponent'
import Dropdown from './Dropdown'

import {
    incrementLIKES,
    incrementSHARES,
    sortBy
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

function handleSortList(postsProp, sortByProp, tags) {
    let resultList = [];
    resultList = postsProp.filter((post) => (
        tags.length === 0 || post.tags.includes(tags[0].replace("-", "").toUpperCase())
    ))
    switch (sortByProp) {
        case "Most shared":
            return resultList.sort(function (a, b) {
                return (a.shares - b.shares);
            }).reverse();
        case "Most liked":
            return resultList.sort(function (a, b) {
                return (a.likes - b.likes);
            }).reverse();
        case "Newest first":
            return resultList.sort(function (a, b) {
                return (a.time - b.time);
            });
        case "Oldest first":
            return resultList.sort(function (a, b) {
                return (a.time - b.time);
            }).reverse();
        default:
            return resultList;
    }
}

const HackerPost = ({ postsProp, sortByProp, sortByAcProp, tags, incrementLIKES, incrementSHARES }) => (
    <Wrapper>
        <AboveFlowDiv>
            <HeaderStyle>TODAY</HeaderStyle>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <DrpDownStyle>
                <Dropdown sortBy={sortByProp} sortByAc={sortByAcProp} />
            </DrpDownStyle>
        </AboveFlowDiv>
        {
            handleSortList(postsProp, sortByProp, tags).map((post, index) =>
                <PostComponent
                    key={post + index}
                    id={post.id}
                    likes={post.likes}
                    shares={post.shares}
                    header={post.header}
                    content={post.content}
                    time={`${post.time} days ago`}
                    account={post.account}
                    tags={post.tags}
                    showing={post.showing}
                    increment={incrementLIKES}
                    incrementSHARES={incrementSHARES}
                />
            )
        }
    </Wrapper>
);

const mapStateToProps = ({ posts }) => {
    return {
        postsProp: posts.list_of_posts,
        tags: posts.selected_tags,
        sortByProp: posts.sort_by
    }
}
const mapDispatchToProps = (dispatch) => ({
    incrementLIKES: (id) => dispatch(incrementLIKES(id)),
    incrementSHARES: (id) => dispatch(incrementSHARES(id)),
    sortByAcProp: (title) => dispatch(sortBy(title)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HackerPost);
