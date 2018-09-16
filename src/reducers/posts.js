import data from "../data/api.json"

export const SHOW = 'SHOW'
export const INCREMENT = 'INCREMENT'
export const INCREMENTSHARES = 'INCREMENTSHARES'

function creatInitialState() {
    let list_of_posts = [];
    list_of_posts = data.posts;
    return { list_of_posts };
}

const initialState = creatInitialState();

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                list_of_posts: state.list_of_posts.map(post => post.id === action.id ? { ...post, likes: post.likes + 1 } : { ...post })
            }

        case INCREMENTSHARES:
            return {
                list_of_posts: state.list_of_posts.map(post => post.id === action.id ? { ...post, shares: post.shares + 1 } : { ...post })
            }

        case SHOW:
            return {
                list_of_posts: state.list_of_posts.map(post => action.showing === "ALL" || post.tags.contain(action.showing) ? { ...post, showing: true } : { ...post, showing: false })
            }
        default:
            return state
    }
}


export const incrementLIKES = (id) => (
    {
        type: INCREMENT,
        id: id
    }
)

export const incrementSHARES = (id) => (
    {
        type: INCREMENTSHARES,
        id: id
    }

)
