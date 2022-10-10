import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({ store }) => {
    return (
        <>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </>
    );
}

export default Profile;