import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea className={s.block}></textarea>
                <button className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="10"/>
                <Post message="It's my first post" likesCount="1000"/>
            </div>
            
        </div>
    );
}

export default MyPosts;