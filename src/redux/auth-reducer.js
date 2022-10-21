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
                ...action.data,
                isAuth: true,
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

export const setUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    data: {id, email, login},
});

export const setUserPhotoSmall = (photo) => ({
    type: SET_USER_PHOTO_SMALL,
    photo,
});

export default authReducer;