import s from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.ava} src="https://avatars.mds.yandex.net/i?id=019b41db423c7fa7dcd43c6883f07a9f-3727926-images-thumbs&n=13"></img>
                { message }
                <div>
                    <span>like {likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;