import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({state}) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={state.posts}/>
        </>
    );
}

export default Profile;