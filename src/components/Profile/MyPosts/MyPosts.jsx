import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts, newPostText, addPost, updateNewPostText}) => {

    const postsElements = posts.map(({message, likesCount, id}) => 
            <Post key={id} message={message} likesCount={likesCount}/>
        );

    const newPostElement = React.createRef();

    const addPostToState = () => {
        addPost();
        updateNewPostText('');
    }

    const updateState = () => {
        const newValue = newPostElement.current.value;
        console.log(newValue);
        updateNewPostText(newValue);
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