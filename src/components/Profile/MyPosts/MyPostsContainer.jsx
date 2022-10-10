import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store }) => {
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostCreator());
    }

    const updateNewPostText = (newValue) => {
        // const newValue = newPostElement.current.value;
        // const newValue = e.target.value;
        // console.log(newValue);
        store.dispatch(updateNewPostTextCreator(newValue));
    }

    return (<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>);
}

export default MyPostsContainer;