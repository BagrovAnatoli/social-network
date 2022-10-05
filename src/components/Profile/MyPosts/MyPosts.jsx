import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 1000},
    ];

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