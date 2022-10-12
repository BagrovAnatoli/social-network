const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const getLastId = (objects) => {
    return Number(objects[objects.length - 1].id);
};

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 1000},
    ],
    newPostText: 'it-kamasutra',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const lastPostId = getLastId(state.posts);
            const newPost = {
                id: (lastPostId + 1),
                message: state.newPostText,
                likesCount: 0,
            };
            // state.posts.push(newPost);
            // state.newPostText = '';
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText,
            };
        default:
            return state;
    }
    
};

export const addPostCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextCreator = (newValue) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newValue,
});

export default profileReducer;