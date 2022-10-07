import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts, addPost}) => {

    const postsElements = posts.map(({message, likesCount}) => 
            <Post message={message} likesCount={likesCount}/>
        );

    const newPostElement = React.createRef();

    const addPostToState = () => {
        const text = newPostElement.current.value;
        addPost(text);
    }

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElement} className={s.block}></textarea>
                <button onClick={ addPostToState } className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            
        </div>
    );
}

export default MyPosts;