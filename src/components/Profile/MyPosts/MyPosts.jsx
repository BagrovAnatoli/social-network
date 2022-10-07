import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts}) => {

    const postsElements = posts.map(({message, likesCount}) => 
            <Post message={message} likesCount={likesCount}/>
        );

    const newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElement} className={s.block}></textarea>
                <button onClick={ addPost } className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            
        </div>
    );
}

export default MyPosts;