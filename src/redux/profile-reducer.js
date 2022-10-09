const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const getLastId = (objects) => {
    return Number(objects[objects.length - 1].id);
};

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const lastPostId = getLastId(state.posts);
            const newPost = {
                id: (lastPostId + 1),
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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