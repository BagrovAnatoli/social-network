import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts}) => {

    const postsElements = posts
        .map(({message, likesCount}) => 
            <Post message={message} likesCount={likesCount}/>
        )

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea className={s.block}></textarea>
                <button className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            
        </div>
    );
}

export default MyPosts;