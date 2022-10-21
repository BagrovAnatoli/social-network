import {  combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import usersReducer2 from "./users-reducer-2";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    usersPage: usersReducer2,
    auth: authReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;