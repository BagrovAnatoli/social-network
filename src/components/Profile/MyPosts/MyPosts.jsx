import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';

const MyPosts = ({ posts, newPostText, dispatch }) => {

    const postsElements = posts.map(({message, likesCount, id}) => 
            <Post key={id} message={message} likesCount={likesCount}/>
        );

    const newPostElement = React.createRef();

    const addPostToState = () => {
        dispatch(addPostCreator());
    }

    const updateState = (e) => {
        // const newValue = newPostElement.current.value;
        const newValue = e.target.value;
        console.log(newValue);
        dispatch(updateNewPostTextCreator(newValue));
    }

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElement} className={s.block} onChange={updateState} value={newPostText}/>
                <button onClick={ addPostToState } className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            
        </div>
    );
}

export default MyPosts;