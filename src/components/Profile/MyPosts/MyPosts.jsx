import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 1000},
    ];

    return (
        <div className={s.myposts_block}>
            <h3>my posts</h3>
            <div>
                <textarea className={s.block}></textarea>
                <button className={s.block}>Add post</button>
            </div>
            <div className={s.posts}>
                {postData.map(({message, likesCount}) => 
                    <Post message={message} likesCount={likesCount}/>
                )}
            </div>
            
        </div>
    );
}

export default MyPosts;