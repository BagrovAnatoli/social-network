import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        
        case SET_USERS:
            return {...state, users: [...action.users]};

        case SET_CURRENT_PAGE:
            return {...state, currentPage:  action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:  action.count};
        
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:  action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:  action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id=>id!==action.id)};

        default:
            return state;
    }
    
};

export const follow = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber,
});

export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const toggleFollowingProgress = (isFetching, id) => {
    return  {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    id,
    isFetching,
}};

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export default usersReducer2;