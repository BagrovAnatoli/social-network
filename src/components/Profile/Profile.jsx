import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({state, addPost}) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={state.posts} addPost={addPost} />
        </>
    );
}

export default Profile;