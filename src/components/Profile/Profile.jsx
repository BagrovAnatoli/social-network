import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <>
            <div className={s.content__img}></div>
            <div>ava + description</div>
            <MyPosts />
        </>
    );
}

export default Profile;