import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div>
                my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="Hi, how are you?" likesCount="10"/>
                <Post message="It's my first post" likesCount="1000"/>
            </div>
            </div>
        </>
    );
}

export default MyPosts;