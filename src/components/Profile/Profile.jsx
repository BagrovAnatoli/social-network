import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({posts}) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </>
    );
}

export default Profile;