import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css';

const Profile = ({state, addPost, addChangeText}) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={state.posts} addPost={addPost} newPostText={state.newPostText} addChangeText={addChangeText}/>
        </>
    );
}

export default Profile;