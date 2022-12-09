import { authAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO_SMALL = 'SET_USER_PHOTO_SMALL';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photoSmall: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_USER_PHOTO_SMALL:
            return {
                ...state,
                isAuth: true,
                photoSmall: action.photo,
            };
        default:
            return state;
    }
    
};

export const setUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth},
});

export const setUserPhotoSmall = (photo) => ({
    type: SET_USER_PHOTO_SMALL,
    photo,
});

export const authMe = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true));
                profileAPI.getProfile(id).then(profileData => {
                    dispatch(setUserPhotoSmall(profileData.photos.small));
                });
            }
        });
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    const action = stopSubmit("login", {email: "Email is wrong"});
    dispatch(action);
    return;
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(authMe());
        } else {
            
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
}

export default authReducer;