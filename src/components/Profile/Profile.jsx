import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({ profilePage, dispatch }) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} dispatch={dispatch}/>
        </>
    );
}

export default Profile;