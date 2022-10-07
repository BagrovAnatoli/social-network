import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({profilePage, addPost, addChangeText}) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} addPost={addPost} newPostText={profilePage.newPostText} addChangeText={addChangeText}/>
        </>
    );
}

export default Profile;