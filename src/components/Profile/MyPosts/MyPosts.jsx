import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts, newPostText, addPost, addChangeText}) => {

    const postsElements = posts.map(({message, likesCount, id}) => 
            <Post key={id} message={message} likesCount={likesCount}/>
        );

    const newPostElement = React.createRef();

    const addPostToState = () => {
        const text = newPostElement.current.value;
        newPostElement.current.value = '';
        addPost(text);
    }

    const addChangeToState = (e) => {
        const newValue = e.target.value;
        console.log(e.target.value);
        addChangeText(newValue);

    }

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElement} className={s.block} onChange={addChangeToState} value={newPostText}/>
                <button onClick={ addPostToState } className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            
        </div>
    );
}

export default MyPosts;