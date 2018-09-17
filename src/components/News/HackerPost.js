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

function handleSortList(search, postsProp, sortByProp, tags) {
    let tempList = postsProp.slice();
    let inputList = [];
    let resultList = [];
    if (search.length > 0) {
        inputList = tempList.filter(post => (
            post.header.toLowerCase().includes(search.toLowerCase()) || post.content.toLowerCase().includes(search.toLowerCase()) || post.account.toLowerCase().includes(search.toLowerCase())
        ))
        tempList = inputList.slice();
    }
    resultList = tempList.filter(post => (
        tags.length === 0 || post.tags.includes(tags[0].replace("-", "").toUpperCase())
    ))

    switch (sortByProp) {
        case "Most shared":
            return resultList.sort((a, b) => {
                return (b.shares - a.shares);
            });
        case "Most liked":
            return resultList.sort((a, b) => {
                return (b.likes - a.likes);
            });
        case "Newest first":
            return resultList.sort((a, b) => {
                return (a.time - b.time);
            });
        case "Oldest first":
            return resultList.sort((a, b) => {
                return (b.time - a.time);
            });
        default:
            return resultList;
    }

}

const HackerPost = ({ search, postsProp, sortByProp, sortByAcProp, tags, incrementLIKES, incrementSHARES }) => (
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
            handleSortList(search, postsProp, sortByProp, tags).map((post, index) =>
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
