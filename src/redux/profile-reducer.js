import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const getLastId = (objects) => {
    return Number(objects[objects.length - 1].id);
};

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 1000},
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    profileStatus: "",
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus,
            }
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

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setProfileStatus = (profileStatus) => ({
    type: SET_STATUS,
    profileStatus,
});

export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setProfileStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        });
    }
}

export default profileReducer;