import data from "../data/api.json"

export const navigationList = ["Home", "Systems", "Tool", "Data-science", "Blockchain", "Mobile", "Visual", "Open-source", "All"]
export const sortMethods = {popular: "POPULAR", newest: "NEWEST", oldest: "OLDEST"}
export const TAGS = 'TAGS'
export const SORT = 'SORT'
export const INCREMENT = 'INCREMENT'
export const INCREMENTSHARES = 'INCREMENTSHARES'

function creatInitialState() {
    let list_of_posts = [];
    let selected_tags = [];
    let sort_by = "Newest first";
    list_of_posts = data.posts;
    return { list_of_posts, selected_tags, sort_by };
}

const initialState = creatInitialState();

const tagsForAll = ["", "HOME", "ALL"];

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                list_of_posts: state.list_of_posts.map(post => post.id === action.id ? { ...post, likes: post.likes + 1 } : post)
            }

        case INCREMENTSHARES:
            return {
                ...state,
                list_of_posts: state.list_of_posts.map(post => post.id === action.id ? { ...post, shares: post.shares + 1 } : post)
            }

        case TAGS:
            return {
                ...state,
                selected_tags: tagsForAll.includes(action.showing.toUpperCase()) ? [] : [action.showing]
            }
        case SORT:
            return {
                ...state,
                sort_by: action.sorting
            }
        default:
            return state
    }
}

export const incrementLIKES = id => (
    {
        type: INCREMENT,
        id: id
    }
)

export const incrementSHARES = id => (
    {
        type: INCREMENTSHARES,
        id: id
    }
)
export const showTAGS = showing => (
    {
        type: TAGS,
        showing: showing
    }
)
export const sortBy = sorting => (
    {
        type: SORT,
        sorting: sorting
    }
)
