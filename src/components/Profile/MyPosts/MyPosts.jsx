import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component="textarea"
                name="newPost"
                className={s.block}
                placeholder="Enter You Idea"
            ></Field>
            <button className={s.block}>Add post</button>
        </form>
    );
};

const PostReduxForm = reduxForm({
    form: 'post',
  })(PostForm)

const MyPosts = ({ posts, addPost }) => {

    const postsElements = posts.map(({message, likesCount, id}) => 
            <Post key={id} message={message} likesCount={likesCount}/>
        );

    // const newPostElement = React.createRef();

    // const onPostChange = (e) => {
    //     // const newValue = newPostElement.current.value;
    //     const newValue = e.target.value;
    //     console.log(newValue);
    //     updateNewPostText(newValue);
    // }

    const onSubmit = (formData) => {
        console.log(formData);
        addPost(formData.newPost);
    }

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            
        </div>
    );
}

export default MyPosts;